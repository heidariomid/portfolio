const CACHE = 'oh-v2';
const PAGE = '/';
const SHELL = [PAGE, '/manifest.json', '/favicon.ico', '/icon-192x192.png', '/icon-512x512.png', '/apple-touch-icon.png'];

const isAsset = (url) =>
	url.pathname.startsWith('/_next/static/') ||
	url.pathname.startsWith('/_next/image') ||
	url.pathname.startsWith('/assets/images/') ||
	/\.(?:png|jpe?g|webp|avif|svg|ico|woff2?)$/.test(url.pathname);

async function cachePageAndAssets(cache) {
	const res = await fetch(PAGE, {cache: 'no-store'});
	if (!res.ok) return;
	const html = await res.clone().text();
	await cache.put(PAGE, res);
	const assets = new Set(html.match(/\/_next\/static\/[^"'\s)\\]+/g) || []);
	// One optimized size per image, so lazy images further down work offline too.
	const images = new Map();
	for (const raw of html.match(/\/_next\/image\?[^"'\s,]+/g) || []) {
		const url = new URL(raw.replace(/&amp;/g, '&'), self.location.origin);
		const src = url.searchParams.get('url');
		const w = Number(url.searchParams.get('w'));
		if (src && (!images.has(src) || w > images.get(src).w)) images.set(src, {w, href: url.pathname + url.search});
	}
	for (const {href} of images.values()) assets.add(href);
	await Promise.all([...assets].map((a) => cache.add(a).catch(() => {})));
}

async function cachedImage(url) {
	const cache = await caches.open(CACHE);
	const src = url.searchParams.get('url');
	for (const key of await cache.keys()) {
		const k = new URL(key.url);
		if (k.pathname === '/_next/image' && k.searchParams.get('url') === src) return cache.match(key, {ignoreVary: true});
	}
}

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then(async (cache) => {
				await Promise.all(SHELL.filter((u) => u !== PAGE).map((u) => cache.add(u).catch(() => {})));
				await cachePageAndAssets(cache);
			})
			.then(() => self.skipWaiting()),
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim()),
	);
});

// The page sends the URLs it already loaded before this worker took control.
self.addEventListener('message', (event) => {
	if (event.data?.type !== 'cache-urls') return;
	event.waitUntil(
		caches.open(CACHE).then((cache) =>
			Promise.all(
				event.data.urls
					.filter((u) => {
						const url = new URL(u);
						return url.origin === self.location.origin && isAsset(url);
					})
					.map((u) => cache.match(u, {ignoreVary: true}).then((hit) => hit || cache.add(u).catch(() => {}))),
			),
		),
	);
});

self.addEventListener('fetch', (event) => {
	const {request} = event;
	if (request.method !== 'GET') return;
	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request)
				.then((res) => {
					if (res.ok && url.pathname === PAGE) {
						const copy = res.clone();
						caches.open(CACHE).then((cache) => cache.put(PAGE, copy));
					}
					return res;
				})
				.catch(() => caches.match(PAGE)),
		);
		return;
	}

	if (isAsset(url)) {
		event.respondWith(
			caches.match(request, {ignoreVary: true}).then(
				(hit) =>
					hit ||
					fetch(request)
						.then((res) => {
							if (res.ok) {
								const copy = res.clone();
								caches.open(CACHE).then((cache) => cache.put(request, copy));
							}
							return res;
						})
						.catch(async () => (url.pathname === '/_next/image' && (await cachedImage(url))) || Response.error()),
			),
		);
	}
});

'use client';

import {useEffect} from 'react';

const ServiceWorker = () => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
		navigator.serviceWorker
			.register('/sw.js', {scope: '/', updateViaCache: 'none'})
			.then(() => navigator.serviceWorker.ready)
			.then((reg) => {
				const urls = performance.getEntriesByType('resource').map((e) => e.name);
				reg.active?.postMessage({type: 'cache-urls', urls});
			})
			.catch(() => {});
	}, []);

	return null;
};

export default ServiceWorker;

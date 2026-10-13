import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://heidariomid.ir',
			lastModified: '2026-10-13',
			changeFrequency: 'yearly',
			priority: 1,
		},
	];
}

import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { destinations } from '@/data/destinations';
import { courses, universities } from '@/data/catalog';

const publicPages = [
	['/', 1],
	['/about', 0.6],
	['/services', 0.8],
	['/contact', 0.7],
	['/destinations', 0.9],
	['/universities', 0.9],
	['/courses', 0.9],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const staticEntries = publicPages.map(([path, priority]) => ({
		url: new URL(path, site.siteUrl).toString(),
		changeFrequency: 'monthly' as const,
		priority,
	}));

	return [
		...staticEntries,
		...destinations.map((destination) => ({
			url: new URL(`/destinations/${destination.slug}`, site.siteUrl).toString(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		})),
		...universities.map((university) => ({
			url: new URL(`/universities/${university.slug}`, site.siteUrl).toString(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		})),
		...courses.map((course) => ({
			url: new URL(`/courses/${course.slug}`, site.siteUrl).toString(),
			changeFrequency: 'monthly' as const,
			priority: 0.6,
		})),
	];
}

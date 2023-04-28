import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = await import('./content');

	page.summaryLargeImage.metadata.url = url.href;

	return {
		content: page.summaryLargeImage
	};
}) satisfies PageLoad;

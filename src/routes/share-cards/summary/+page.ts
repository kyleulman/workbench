import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = await import('./content');

	page.summary.metadata.url = url.href;

	return {
		content: page.summary
	};
}) satisfies PageLoad;

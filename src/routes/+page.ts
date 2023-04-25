import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = (await import(`./content`)).home.metadata;

	page.url = url.href;

	return {
		page
	};
}) satisfies PageLoad;

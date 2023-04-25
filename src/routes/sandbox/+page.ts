import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = (await import(`./content`)).sandbox.metadata;

	page.url = url.href;

	return {
		page
	};
}) satisfies PageLoad;

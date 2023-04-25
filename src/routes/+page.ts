import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = await import(`./content`);

	page.home.metadata.url = url.href;

	return {
		content: page.home
	};
}) satisfies PageLoad;

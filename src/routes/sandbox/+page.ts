import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const page = await import(`./content`);

	page.sandbox.metadata.url = url.href;

	return {
		content: page.sandbox
	};
}) satisfies PageLoad;

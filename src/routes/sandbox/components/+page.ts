import type { PageLoad } from './$types';
import type { Block } from '$lib/types';

export const load = (async ({ url }) => {
	const page = (await import(`./content`));

	assignComponents(page.components.blocks);

	page.components.metadata.url = url.href;

	return {
		content: page.components
	};
}) satisfies PageLoad;

function assignComponents(blocks: Block[]) {
	blocks.forEach((block) => {
		block.componentPromise = import(
			`../../../lib/${block.componentName}.svelte`
		);
	});

	return blocks;
}
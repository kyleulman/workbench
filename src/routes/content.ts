import type { PageMetadata, SharedMetadata, Block } from '$lib/types';

export const sharedMetadata: SharedMetadata = {
	title: 'Workbench',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://res.cloudinary.com/kyuisonline/image/upload/v1682717850/workbench/card-720-png.png',
		alt: 'Svelte logo.',
		width: '720',
		height: '720'
	},
	twitter: {
		card: 'summary'
	}
};

export const home: { metadata: PageMetadata; blocks: Block[] } = {
	metadata: {
		title: 'Hello World!',
		description: 'The tools that power my projects.',
		url: ''
	},
	blocks: []
};

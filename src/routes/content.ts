import type { PageMetadata, SharedMetadata } from '$lib/types';

export const sharedMetadata: SharedMetadata = {
	title: 'Workbench',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://ky-workbench.vercel.app/images/card-1440x720.png',
		alt: 'Svelte logo.',
		width: '1440',
		height: '720'
	},
	twitter: {
		card: 'summary_large_image'
	}
};

export const home: { metadata: PageMetadata } = {
	metadata: {
		title: 'Hello World!',
		description: 'The tools that power my projects.',
		url: ''
	}
};

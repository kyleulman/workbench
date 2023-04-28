import type { PageMetadata } from '$lib/types';

export const summaryLargeImage: { metadata: PageMetadata } = {
	metadata: {
		title: 'Summary Large Image Share Card',
		description: 'Use for blog articles.',
		url: '',
		image: {
			src: 'https://res.cloudinary.com/kyuisonline/image/upload/v1682719848/workbench/card-sample-1440-png.png',
			alt: 'Article placeholder.',
			width: '1440',
			height: '720'
		},
		twitter: {
			card: 'summary_large_image',
			site: 'kyuisonline'
		}
	}
};

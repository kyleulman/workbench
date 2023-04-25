interface Image {
	src: string;
	alt: string;
	width?: number | string;
	height?: number | string;
}

// Metadata
type Robots = 'all' | 'index' | 'noindex' | 'follow' | 'nofollow';

interface Twitter {
	card: 'summary' | 'summary_large_image' | 'app' | 'player';
	site?: string;
	creator?: string;
}

export interface PageMetadata {
	title: string;
	description: string;
	url: string;
	type?: string;
	robots?: Robots;
	image?: Image;
	twitter?: Twitter;
}

export interface SharedMetadata {
	title: string;
	type: string;
	robots: Robots;
	image: Image;
	twitter: Twitter;
}

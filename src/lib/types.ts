import type { SvelteComponentTyped } from 'svelte';

// * Elements
interface Image {
	src: string;
	alt: string;
	width?: number | string;
	height?: number | string;
}

// * Components
export interface CarouselContent {
	isControls: boolean;
	autoplay: number;
	slides: Figure[];
}

export interface Card {
	heading?: string;
	subheading?: string;
	detail?: string;
	actions?: {
		label: string;
		href?: string;
		as?: 'a' | 'button';
		onClick?: () => void;
	}[];
	isSkeletonCard?: boolean;
}

export interface Cta {
	heading: string;
	href: string;
	label: string;
	isSkeletonCard?: boolean;
}

export interface Figure {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	caption?: string;
	title?: string;
	as?: 'iframe' | 'image'; // Defaults to image
}

export interface Footer {
	notice?: string;
	copyright: string;
}

export interface Header {
	title: {
		href: string;
		label: string;
		logo: Figure;
	};
	contact: {
		icon: string;
		href?: string;
		label: string;
	}[];
}

export interface List {
	heading?: string;
	list: {
		icon: string;
		detail: string;
	}[];
}

export interface Quote {
	detail: string;
	name: string;
	href: string;
	label: string;
}

// * Data
export interface Block {
	componentName: string;
	componentPromise?: Promise<SvelteComponentTyped>;
	[index: string]: unknown;
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

import type { Bio, Header, PageMetadata, IconList, Footer } from '$lib/types';

export const sandbox: {
	metadata: PageMetadata;
	header: Header;
	bio: Bio;
	projects: IconList;
	externals: IconList;
	footer: Footer;
} = {
	metadata: {
		title: 'Sandbox',
		description: 'For experiments and throwaway code.',
		url: ''
	},
	header: {
		heading: 'Kyle Ulman',
		cta: {
			href: '/on-upwork',
			label: "Let's work together"
		}
	},
	bio: {
		image: {
			src: 'https://picsum.photos/200',
			alt: 'Headshot of Kyle',
			width: 144,
			height: 144
		},
		detail: `Heya! I'm a web developer from Wilmington, NC. I utilize SvelteKit to help teams on Upwork bring their ideas to life. <br /> <a href="#on-upwork" class="btn mt-2">Let's work together</a>`
	},
	projects: {
		heading: 'Projects',
		list: [
			{
				href: '#workbench',
				heading: 'workbench',
				detail: 'The tools that power my projects.',
				image: {
					src: '/images/github.svg',
					alt: 'GitHub',
					width: 24,
					height: 24
				},
				isReversed: true,
				isItemsCenter: false
			},
			{
				href: '#learn-svelte-kit',
				heading: 'learn-svelte-kit',
				detail: 'The tools that power my projects',
				icon: {
					name: 'language',
					size: '24px'
				},
				isReversed: true,
				isItemsCenter: false
			},
			{
				href: '#kyle-ulman',
				heading: 'kyle-ulman',
				detail: 'The tools that power my projects',
				icon: {
					name: 'language',
					size: '24px'
				},
				isReversed: true
			}
		]
	},
	externals: {
		heading: `<div class="flex items-center gap-2"><div class="w-2 h-2 bg-green-500 rounded-full"></div>I'm online</div>`,
		list: [
			{
				href: '#learn-sveltekit',
				heading: `Learn SvelteKit`,
				detail: `I write about what's possible with SvelteKit`,
				image: {
					src: '/images/learn-sveltekit.svg',
					alt: 'Learn SvelteKit icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: '#upwork',
				heading: `Let's work together`,
				detail: 'Web development services on Upwork',
				image: {
					src: '/images/upwork.svg',
					alt: 'UpWork icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: '#github',
				heading: `GitHub`,
				image: {
					src: '/images/github.svg',
					alt: 'UpWork icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: '#twitter',
				heading: `Twitter`,
				image: {
					src: '/images/twitter.svg',
					alt: 'Twitter icon',
					width: 36,
					height: 36
				},
				isReversed: false,
				isItemsCenter: true
			},
			{
				href: '#email',
				heading: `Send a message`,
				icon: {
					name: 'mail',
					size: '36px'
				},
				isReversed: false,
				isItemsCenter: true
			}
		]
	},
	footer: {
		copyright: 'Kyle Ulman'
	}
};

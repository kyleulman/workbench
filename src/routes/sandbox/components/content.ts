import type { Block, PageMetadata } from '$lib/types';

export const components: { metadata: PageMetadata; blocks: Block[] } = {
	metadata: {
		title: 'Components',
		description: 'Component development',
		url: ''
	},
	blocks: [
		{
			componentName: 'Header',
			title: {
				href: '/',
				label: 'Site Title',
				logo: {
					src: 'https://picsum.photos/300'
				}
			},
			contact: [
				{
					icon: 'phone',
					label: '910-555-1223',
					href: 'tel:9105551223'
				},
				{
					icon: 'map',
					label: '123 South Front Street <br/> Wilmington, NC 28401'
				},
				{
					icon: 'bolt',
					label: 'Lightning Bolt',
					href: '#lightning-bolt'
				}
			]
		},
		{
			componentName: 'Quote',
			detail:
				"Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.",
			name: 'George Lucas',
			href: '#star-wars',
			label: 'Star Wars: Episode IV - A New Hope'
		},
		{
			componentName: 'Preload',
			src: 'https://picsum.photos/768/384',
			alt: 'Placeholder.',
			width: 768,
			height: 384
		},
		{
			componentName: 'InfoList',
			heading: 'Info List Heading',
			list: [
				{
					icon: 'key',
					heading: 'Info List Item Heading',
					detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
				},
				{
					image: {
						src: '/key.svg',
						alt: 'placeholder',
						width: 50,
						height: 50
					},
					heading: 'Info List Item Heading',
					detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing.'
				}
			]
		},
		{
			componentName: 'Figure',
			src: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13202.146388775169!2d-77.89388890000001!3d34.18376375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682449390832!5m2!1sen!2sus',
			title: 'Iframe.',
			as: 'iframe',
			height: 300
		},
		{
			componentName: 'Figure',
			src: 'https://picsum.photos/600',
			alt: 'Placeholder.'
		},
		{
			componentName: 'CTA',
			heading: 'Click here, click here, click here!',
			href: '#cta',
			label: "Don't Miss Out!"
		},
		{
			componentName: 'CTA',
			heading: "Don't Miss Out",
			href: '#cta',
			label: 'Sign Up Today',
			isSkeletonCard: true
		},
		{
			componentName: 'CardList',
			heading: 'Card List',
			list: [
				{
					icon: 'search',
					detail: 'Search for something!'
				},
				{
					icon: 'home',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolore.'
				},
				{
					icon: 'menu',
					detail:
						'In libero inventore aspernatur! Exercitationem quaerat necessitatibus eveniet ipsa velit officia laborum omnis. Repellendus voluptate sunt, ad saepe rerum non?'
				},
				{
					icon: 'close',
					detail: 'Search for something!'
				},
				{
					icon: 'settings',
					detail: 'Search for something!'
				}
			]
		},
		{
			componentName: 'Card',
			heading: 'Card Heading',
			subheading: 'This is a subheading',
			detail:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit vero lorem ipsum dolor si.',
			actions: [
				{
					label: 'Primary Button',
					href: '#primary-button',
					as: 'button'
				},
				{
					label: 'Secondary Button',
					href: '#secondary-button',
					as: 'button'
				},
				{
					label: 'Link',
					href: '#link'
				},
				{
					label: 'Tertiary Button',
					onClick: () => console.log('Tertiary Button')
				}
			]
		},
		{
			componentName: 'Card',
			heading: 'Card Heading',
			subheading: 'This is a subheading',
			detail:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit vero, quod, cum minus earum laudantium qui similique exercitationem voluptas impedit ullam a sequi, veniam expedita vitae nam deserunt! Est?',
			actions: [
				{
					label: 'Primary Button',
					href: '#primary-button',
					as: 'button'
				},
				{
					label: 'Secondary Button',
					href: '#secondary-button',
					as: 'button'
				},
				{
					label: 'Link',
					href: '#link'
				},
				{
					label: 'Tertiary Button',
					onClick: () => console.log('Tertiary Button')
				}
			],
			isSkeletonCard: false
		},
		{
			componentName: 'Card',
			heading: 'Card Heading',
			subheading: 'This is a subheading',
			detail:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit vero lorem ipsum dolor si.',
			actions: [
				{
					label: 'Primary Button',
					href: '#primary-button',
					as: 'button'
				},
				{
					label: 'Second Button',
					href: '#second-button',
					as: 'button'
				}
			],
			isSkeletonCard: true
		},
		{
			componentName: 'Card',
			heading: 'Card Heading',
			subheading: 'This is a subheading',
			detail:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit vero, quod, cum minus earum laudantium qui similique exercitationem voluptas impedit ullam a sequi, veniam expedita vitae nam deserunt! Est?',
			actions: [
				{
					label: 'Primary Button',
					href: '#primary-button',
					as: 'button'
				},
				{
					label: 'Secondary Button',
					href: '#secondary-button',
					as: 'button'
				},
				{
					label: 'Link',
					href: '#link'
				},
				{
					label: 'Tertiary Button',
					onClick: () => console.log('Tertiary Button')
				}
			],
			isSkeletonCard: true
		},
		{
			componentName: 'Carousel',
			isControls: true,
			autoplay: 0,
			slides: [
				{
					src: 'https://picsum.photos/576',
					alt: 'Placeholder.',
					caption: 'This is a great caption.'
				},
				{ src: 'https://picsum.photos/576?random=2', alt: 'Placeholder.' }
			]
		},
		{
			componentName: 'Card',
			heading: 'Inline List',
			detail: `Some body content... 
			<ul class="inline-list">
			<li><span>List item one</span></li>
			<li>
				<span>List item two</span>
				<ul class="inline-list">
					<li><span>Nested Item One</span></li>
				</ul>
			</li>
		</ul>
			`
		},
		{
			componentName: 'Footer',
			notice: 'This is a footer notice, you can add anything you want here.',
			copyright: 'Kyle Ulman'
		}
	]
};

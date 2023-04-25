<script lang="ts">
	import { CTA, Card, CardList, Carousel, Figure, Footer, Header, InfoList, PreloadImage, Quote, Shroud } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header>
	<Card
		content={{
			heading: data.page.title,
			detail: data.page.description,
			isSkeletonCard: true
		}}
	/>
</header>
<Header content={{
	title: {
		href: "/",
		label: "Site Title",
		logo: {
			src: "https://picsum.photos/250"
		}
	},
	contact: [
		{
			icon: "phone",
			label: "910-555-1223",
			href: "tel:9105551223"
		},
		{
			icon: "map",
			label: "123 South Front Street <br/> Wilmington, NC 28401"
		},
		{
			icon: "bolt",
			label: "Lightning Bolt",
			href: "#lightning-bolt"
		}
	]
}}/>
<section>
	<Figure content={{
		src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13202.146388775169!2d-77.89388890000001!3d34.18376375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682449390832!5m2!1sen!2sus",
		title: "Iframe.",
		as: "iframe",
		height: 300
	}}/>
</section>
<section>
	<Figure content={{
		src: "https://picsum.photos/600",
		alt: "Placeholder."
	}}/>
</section>
<section>
	<CTA
		content={{
			heading: 'Click here, click here, click here!',
			href: '#cta',
			label: "Don't Miss Out!"
		}}
	/>
</section>
<section>
	<CTA
		content={{
			heading: "Don't Miss Out",
			href: '#cta',
			label: 'Sign Up Today',
			isSkeletonCard: true
		}}
	/>
</section>
<section>
	<CardList
		content={{
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
		}}
	/>
</section>
<section>
	<Card
		content={{
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
		}}
	/>
</section>
<section>
	<Card
		content={{
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
		}}
	/>
</section>
<section>
	<Card
		content={{
			heading: 'Card Heading',
			subheading: 'This is a subheading',
			detail:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque suscipit vero lorem ipsum dolor si.',
			actions: [
				{
					label: 'Primary Button',
					href: '#primary-button',
					as: 'button'
				}
			],
			isSkeletonCard: true
		}}
	/>
</section>
<section>
	<Card
		content={{
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
		}}
	/>
</section>
<section>
	<article>
		<Carousel content={{
			isControls: true,
			autoplay: 0,
			slides: [
				{ src: 'https://picsum.photos/576', alt: 'Placeholder.', caption: "This is a great caption." },
				{ src: 'https://picsum.photos/576?random=2', alt: 'Placeholder.' }
			]
		}} />
	</article>
</section>
<section>
	<article class="card">
		<ul class="inline-list">
			<li><span>List item one</span></li>
			<li>
				<span>List item two</span>
				<ul class="inline-list">
					<li><span>Nested Item One</span></li>
				</ul>
			</li>
		</ul>
	</article>
</section>
<Footer content={{
	notice: "This is a footer notice, you can add anything you want here."
	,copyright: "Kyle Ulman"
}}/>

<style lang="postcss">
	header,
	section {
		@apply p-8;
	}
</style>

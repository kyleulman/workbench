<script lang="ts">
	import Card from '$lib/Card.svelte';
	import CardList from '$lib/CardList.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import type { CarouselContent } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	const carousel: CarouselContent = {
		isControls: true,
		autoplay: 0,
		slides: [
			{ src: 'https://picsum.photos/576', alt: 'Placeholder.' },
			{ src: 'https://picsum.photos/576?random=1', alt: 'Placeholder.' },
			{ src: 'https://picsum.photos/576?random=2', alt: 'Placeholder.' }
		]
	};
</script>

<header>
	<Card content={{
		heading: data.page.title,
		detail: data.page.description,
		isSkeletonCard: true
	}} />
</header>
<section>
	<CardList content={{ heading: "Card List", list: [
		{
			icon: "search",
			detail: "Search for something!"
		},
		{
			icon: "home",
			detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolore."
		},
		{
			icon: "menu",
			detail: "In libero inventore aspernatur! Exercitationem quaerat necessitatibus eveniet ipsa velit officia laborum omnis. Repellendus voluptate sunt, ad saepe rerum non?"
		},
		{
			icon: "close",
			detail: "Search for something!"
		},
		{
			icon: "settings",
			detail: "Search for something!"
		},
	] }}/>
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
		<Carousel content={carousel} />
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

<style lang="postcss">
	header,
	section {
		@apply p-8;
	}
</style>

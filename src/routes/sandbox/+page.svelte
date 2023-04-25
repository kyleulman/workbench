<script lang="ts">
	import Card from '$lib/Card.svelte';
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
	<article class="card space-y-4">
		<h1>{data.page.title}</h1>
		<p>{data.page.description}</p>
	</article>
</header>
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

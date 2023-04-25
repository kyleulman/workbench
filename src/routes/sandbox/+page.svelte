<script lang="ts">
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

<section class="p-8">
	<article class="card mx-auto max-w-sm space-y-4">
		<h1>{data.page.title}</h1>
		<p>{data.page.description}</p>
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
<section class="p-8">
	<article>
		<Carousel content={carousel} />
	</article>
</section>

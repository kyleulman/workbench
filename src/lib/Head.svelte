<script lang="ts">
	import type { PageMetadata, SharedMetadata } from './types';

	export let page: PageMetadata;
	export let shared: SharedMetadata;

	const title = page.title + ' • ' + shared.title;
	const description = page.description;
	const url = page.url;
	const type = page.type || shared.type;
	const robots = page.robots || shared.robots;

	const image = {
		src: page.image?.src || shared.image.src,
		alt: page.image?.alt || shared.image.alt,
		width: (page.image?.width as string) || (shared.image.width as string),
		height: (page.image?.height as string) || (shared.image.height as string)
	};

	const twitter = {
		card: page.twitter?.card || shared.twitter.card,
		site: page.twitter?.site || shared.twitter.site,
		creator: page.twitter?.creator || shared.twitter.creator
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="robots" content={robots} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image.src} />
	<meta property="og:image:alt" content={image.alt} />
	<meta property="og:image:width" content={image.width} />
	<meta property="og:image:height" content={image.height} />
	<meta property="og:type" content={type} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image.src} />
	<meta name="twitter:image:alt" content={image.alt} />
	<meta name="twitter:card" content={twitter.card} />

	{#if twitter.site}
		<meta name="twitter:site" content={'@' + twitter.site} />
	{/if}

	{#if twitter.creator}
		<meta name="twitter:creator" content={'@' + twitter.creator} />
	{/if}
</svelte:head>

<script lang="ts">
	import type { Cta } from './types';

	export let content: Cta;
</script>

<article
	class="flex flex-col items-center justify-evenly gap-4 sm:flex-row"
	class:card={content.isSkeletonCard}
>
	<h2 class="text-center sm:text-left">{content.heading}</h2>
	<a href={content.href} class="btn variant-filled-primary">{content.label}</a>
</article>

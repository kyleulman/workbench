<script lang="ts">
	import type { Cta } from './types';

	export let content: Cta;
</script>

<article
	class="tablet-m:my-4 flex flex-wrap items-center justify-evenly gap-4"
	class:card={content.isSkeletonCard}
>
	<h2 class="min-w-[200px] flex-1">{content.heading}</h2>
	<a href={content.href} class="btn variant-filled-primary">{content.label}</a>
</article>

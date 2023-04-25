<script lang="ts">
	import type { Cta } from '../types';

	export let content: Cta;
</script>

<article class="flex items-center justify-evenly gap-4 tablet-m:my-4">
	<h2>{content.detail}</h2>
	<a href={content.href} class="btn variant-filled-primary">{content.label}</a>
</article>

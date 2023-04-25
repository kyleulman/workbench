<script lang="ts">
	import type { Bio } from '$lib/types';

	export let content: Bio;
</script>

<section class="resp-row items-center">
	<figure class="max-w-[144px] overflow-hidden rounded-full bg-thunder-800">
		<img
			src={content.image.src}
			alt={content.image.alt}
			width={content.image.width}
			height={content.image.height}
		/>
	</figure>
	<article class="max-w-sm flex-1">
		<p class="text-center sm:text-left">{@html content.detail}</p>
	</article>
</section>

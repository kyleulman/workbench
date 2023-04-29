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
	<article class="max-w-sm flex-1 space-y-3">
		<p class="text-center sm:text-left">{@html content.detail}</p>
		{#if content.actions}
			<ul class="flex flex-wrap justify-center gap-4 sm:justify-start">
				{#each content.actions as action, i}
					<li>
						{#if action.href}
							{#if action.as === 'button'}
								<a
									href={action.href}
									class="btn variant-filled-primary"
									class:variant-filled-secondary={i === 1}
									class:variant-filled-tertiary={i > 1}
								>
									{@html action.label}
								</a>
							{:else}
								<a href={action.href}> {@html action.label} </a>
							{/if}
						{:else if action.onClick}
							<button
								on:click={action.onClick}
								class="btn variant-filled-primary"
								class:variant-filled-secondary={i === 1}
								class:variant-filled-tertiary={i > 1}>{action.label}</button
							>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</article>
</section>

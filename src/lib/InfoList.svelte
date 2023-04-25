<script lang="ts">
	import type { List } from '$lib/types';

	export let content: List;
</script>

<article class="card space-y-8">
	{#if content.heading}
		<h2>{content.heading}</h2>
	{/if}
	<ul class="space-y-8">
		{#each content.list as item}
			<li class="flex flex-col items-start gap-4 mobile-l:flex-row">
				{#if item.icon || item.image}
					<figure
						class="flex justify-center overflow-hidden rounded-full bg-primary-500 p-1"
					>
						{#if item.icon}
							<span class="material-icons text-primary-500 text-white"
								>{item.icon}</span
							>
						{:else if item.image}
							<img
								src={item.image.src}
								alt={item.image.alt}
								width={item.image.width}
								height={item.image.height}
							/>
						{/if}
					</figure>
				{/if}
				<div class="flex-1 space-y-2">
					{#if item.heading}
						<h3>{@html item.heading}</h3>
					{/if}
					{#if item.detail}
						<p>{@html item.detail}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</article>

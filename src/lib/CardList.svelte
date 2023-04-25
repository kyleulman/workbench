<script lang="ts">
	import type { List } from './types';

	export let content: List;
</script>

<article class="space-y-2">
	{#if content.heading}
		<h2>{content.heading}</h2>
	{/if}
	<ul class="flex flex-wrap gap-4">
		{#each content.list as item}
			<li
				class="card flex min-w-[200px] flex-[45%] flex-col items-center gap-2 text-center"
			>
				{#if item.icon}
					<span
						class="list-item-icon"
					>
						{item.icon}
					</span>
				{/if}
				<div class="grid flex-1 place-items-center">
					<p>{@html item.detail}</p>
				</div>
			</li>
		{/each}
	</ul>
</article>

<style lang="postcss">
	.list-item-icon {
		border-radius: var(--theme-rounded-base);
		@apply variant-filled-primary h-8 w-8 font-material-outlined text-2xl;
	}
</style>

<script lang="ts">
	import type { List } from './types';

	export let content: List;
</script>

<article>
	<ul class="flex flex-wrap gap-4">
		{#each content.list as item}
			<li
				class="card flex min-w-[200px] flex-[45%] flex-col items-center gap-2 text-center"
			>
				{#if item.icon}
					<span
						class="material-icons rounded-full bg-primary-500 p-1 text-primary-500 text-white"
					>
						{item.icon}
					</span>
				{/if}
				<div class="grid flex-1 place-items-center">
					{#if item.detail}
						<p>{@html item.detail}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</article>

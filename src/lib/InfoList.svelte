<script lang="ts">
	import type { List } from './types';

	export let content: List;
</script>

<article class="space-y-2">
	{#if content.heading}
		<h2>{@html content.heading}</h2>
	{/if}
	<nav class="list-nav">
		<ul>
			{#each content.list as item}
				<li>
					<a href={item.href}>
						{#if item.image}
							<img src={item.image.src} alt={item.image.alt} class="h-8 w-8" />
						{:else if item.icon}
							<span
								class="font-material-outlined h-8 w-8 text-[32px] leading-none"
								>key</span
							>
						{/if}
						<span class="flex-auto">
							{#if item.heading}
								<h2>{item.heading}</h2>
							{/if}
							{#if item.detail}
								<p class="whitespace-normal">{item.detail}</p>
							{/if}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</article>

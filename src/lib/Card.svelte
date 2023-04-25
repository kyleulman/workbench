<script lang="ts">
	import type { Card } from '../types';

	export let content: Card;

	const isCentered =
		(content.detail && content.detail.length < 100) || !content.detail;
</script>

<article
	class:text-center={isCentered}
	class:card={content.isSkeletonCard}
	class="space-y-4"
>
	{#if content.heading}
		<h2>{@html content.heading}</h2>
	{/if}
	{#if content.subheading}
		<h3 class="text-primary-500">{@html content.subheading}</h3>
	{/if}
	{#if content.detail}
		<p>{@html content.detail}</p>
	{/if}
	{#if content.actions}
		<ul class="flex gap-4" class:justify-center={isCentered}>
			{#each content.actions as action, i}
				<li>
					{#if action.href}
						{#if action.as === 'button'}
							<a
								href={action.href}
								class="btn variant-filled-primary"
								class:variant-filled-secondary={i !== 0}
							>
								{@html action.label}
							</a>
						{:else if action.as === 'a'}
							<a href={action.href}> {@html action.label} </a>
						{/if}
					{:else if action.onClick}
						<button on:click={action.onClick} class="btn">{action.label}</button
						>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</article>

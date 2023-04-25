<script lang="ts">
	import type { Block } from './types';

	export let blocks: Block[];
</script>

{#each blocks as block}
	{#await block.componentPromise then component}
		{#if component}
			<svelte:component this={component.default} content={block} />
		{/if}
	{/await}
{/each}

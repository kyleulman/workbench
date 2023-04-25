<script lang="ts">
	import type { Header } from './types';

	export let content: Header;
</script>

<header class="flex flex-col items-center justify-between gap-8 sm:flex-row">
	<h1 class="max-w-64 flex-1">
		<a href={content.title.href}>
			{#if content.title.logo}
				<img
					src={content.title.logo.src}
					alt={content.title.logo.alt}
					class="w-full object-cover"
				/>
			{:else}
				{@html content.title.label}
			{/if}
		</a>
	</h1>
	<ul class="card space-y-2">
		{#each content.contact as item}
			<li class="flex gap-2">
				<span class="font-material-outlined text-lg">{item.icon}</span>
				{#if item.href}
					<a href={item.href}>{item.label}</a>
				{:else}
					<span>{@html item.label}</span>
				{/if}
			</li>
		{/each}
	</ul>
</header>

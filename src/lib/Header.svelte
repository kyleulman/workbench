<script lang="ts">
	import type { Header } from './types';

	export let content: Header;
</script>

<header
	class="mobile-l:flex-row mobile-l:items-center flex flex-col items-start justify-between gap-8"
>
	<h1 class="flex-1">
		<a href={content.title.href}>
			{#if content.title.logo}
				<img src={content.title.logo.src} alt={content.title.logo.alt} />
			{:else}
				{@html content.title.label}
			{/if}
		</a>
	</h1>
	<ul class="card space-y-2">
		{#each content.contact as item}
			<li class="flex items-center gap-2">
				<span class="material-icons">{item.icon}</span>
				{#if item.href}
					<a href={item.href}>{item.label}</a>
				{:else}
					<span>{@html item.label}</span>
				{/if}
			</li>
		{/each}
	</ul>
</header>

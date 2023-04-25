<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/Head.svelte';
	// import '@glidejs/glide/dist/css/glide.core.min.css';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#key $page}
	<Head page={$page.data.content.metadata} shared={data.shared} />
{/key}

<header class="space-x-2 p-4">
	<a href="/">Home</a>
	<a href="/sandbox">Sandbox</a>
</header>

<main class="my-6 flex flex-col gap-12 px-3">
	<slot />
</main>

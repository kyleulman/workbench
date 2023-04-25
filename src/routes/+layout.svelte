<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/Head.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/styles/all.css';
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Head page={$page.data.page} shared={data.shared} />

<div class="fixed right-0 z-50 p-8"><LightSwitch /></div>

<main class="my-8 flex flex-col gap-8 px-4"><slot /></main>

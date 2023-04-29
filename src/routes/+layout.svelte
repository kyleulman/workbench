<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/Head.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#key $page}
	<Head page={$page.data.content.metadata} shared={data.shared} />
{/key}

<main class="my-6 flex flex-col gap-12 px-3">
	<slot />
</main>

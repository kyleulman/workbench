<script lang="ts">
	import type { PageData } from './$types';
	import Loader from '$lib/Loader.svelte';

	export let data: PageData;
</script>

<Loader blocks={data.content.blocks}/>


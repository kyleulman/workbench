<script lang="ts">
	import type { PageData } from './$types';
	import { Bio, IconList, Footer } from '$lib';

	export let data: PageData;
</script>

<h1 class="text-center sm:text-left">{data.content.header.heading}</h1>
<Bio content={data.content.bio} />
<IconList content={data.content.projects} />
<IconList content={data.content.externals} />
<Footer content={data.content.footer} />

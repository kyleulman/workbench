<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-8">
	<article class="card mx-auto max-w-sm space-y-4">
		<h1>{data.page.title}</h1>
		<p>
			Hey there, I'm Ky. I built this workbench to keep my project tools in one
			place. You may find the <a href="https://github.com/kyleulman/workbench"
				>repo</a
			> more interesting.
		</p>
	</article>
</section>

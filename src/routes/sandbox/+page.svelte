<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-8">
	<article class="card mx-auto max-w-sm space-y-4">
		<h1>{data.page.title}</h1>
		<p>{data.page.description}</p>
		<ul class="inline-list">
			<li><span>List item one</span></li>
			<li>
				<span>List item two</span>
				<ul class="inline-list">
					<li><span>Nested Item One</span></li>
				</ul>
			</li>
		</ul>
	</article>
</section>

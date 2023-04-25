<script lang="ts">
	import type { Header } from './types';

	export let content: Header;
</script>

<header class="resp-row items-center justify-between">
	<h1>{content.heading}</h1>
	<a class="btn" href={content.cta.href}>{content.cta.label}</a>
</header>

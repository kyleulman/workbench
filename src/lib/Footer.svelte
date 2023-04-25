<script lang="ts">
	import type { Footer } from '../types';

	export let content: Footer;
</script>

<footer class="space-y-2 p-4 text-center">
	<!-- Notice -->
	{#if content.notice}
		<p>{@html content.notice}</p>
	{/if}
	<!-- Copyright -->
	<p>&copy; {new Date().getFullYear()} {content.copyright}</p>
</footer>

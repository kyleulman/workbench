<script lang="ts">
	import type { Quote } from '$lib/types';

	export let content: Quote;
</script>

<blockquote class="space-y-2">
	<p>{content.detail}</p>
	<p class="not-italic">
		— {content.name} on <a href={content.href}>{content.label}</a>
	</p>
</blockquote>

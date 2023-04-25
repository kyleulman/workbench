<script lang="ts">
	import { fade } from 'svelte/transition';
	import { BROWSER } from 'esm-env';

	export let isShroud: boolean;
	export let fadeDuration = 150;
	export let zIndex = 'z-auto';
	export let background = 'bg-neutral-950/90';
	export let isToggleScroll = false;

	$: {
		if (BROWSER && isToggleScroll) {
			document.documentElement.style.overflow = isShroud ? 'hidden' : 'auto';
		}
	}
</script>

<div
	transition:fade={{ duration: fadeDuration }}
	class={`fixed h-full w-full ${zIndex} ${background}`}
/>

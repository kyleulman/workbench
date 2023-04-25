<script lang="ts">
	import type { PageData } from "./$types";
  import { CardList, Card } from "$lib";

  export let data: PageData;
</script>

<header>
	<Card
		content={{
			heading: data.page.title,
			detail: data.page.description,
			isSkeletonCard: true
		}}
	/>
</header>
<section>
  <CardList content={{
    heading: "What's Inside",
    list: [
      {
        icon: "settings",
        detail: `<a href="/sandbox/components">Components</a>`
      }
    ],
  }} />
</section>
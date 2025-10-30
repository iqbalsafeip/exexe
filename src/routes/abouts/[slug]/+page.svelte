<script lang="ts">
	import Metadata from '$lib/components/metadata.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Metadata title={data.meta.title + ' | Executeagi'} description={data.meta.description} />

<article>
	<data.content />
</article>

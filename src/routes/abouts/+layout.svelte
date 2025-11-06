<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/icon.svelte';

	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
</script>

<section class="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
	
	{@render children()}
</section>

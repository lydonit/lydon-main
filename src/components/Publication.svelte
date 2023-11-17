<script lang="ts">
	import type { Entry } from 'contentful';
	import type { Pub } from 'src/lib/types';
	import CopyCitation from './CopyCitation.svelte';
	import ReadOnline from './ReadOnline.svelte';

	export let entry: Entry<Pub>;
	const pub = entry.fields;
</script>

<div class="pb-6 mb-6 border-b first:border-t first:pt-6">
	<div class="font-semibold mb-2 text-lg">
		{pub.paperTitle}
	</div>
	<div class="mb-2">
		{pub.authors} ({pub.year ? pub.year : 'in press'}). {pub.journal}
	</div>

	<!-- {#if pub.abstract}
		<div>{pub.abstract}</div>
	{/if} -->

	<div class="mt-8 text-gray-800 text-sm flex flex-row gap-x-4">
		<ReadOnline link={pub.link} />
		<CopyCitation citation={pub.title} />
	</div>
</div>

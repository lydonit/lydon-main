<script lang="ts">
	import type { Entry } from 'contentful';
	import type { Measure } from 'src/lib/types';
	import CopyCitation from './CopyCitation.svelte';
	import ReadOnline from './ReadOnline.svelte';
	import RichText from './RichText.svelte';

	export let entry: Entry<Measure>;
	const measure = entry.fields;
</script>

<div class="pb-6 mb-6 border-b first:border-t first:pt-6">
	<div class="font-semibold mb-2 text-lg">
		{measure.measureName}
	</div>

	<div class="mb-4">
		{measure.citation}
	</div>

	<div class="mb-4">
		<RichText rich={measure.description} />
	</div>

	<div class="mt-8 text-gray-800 text-sm flex flex-row gap-x-4">
		<ReadOnline link={measure.link} />
		<CopyCitation citation={measure.citation} />
	</div>
</div>

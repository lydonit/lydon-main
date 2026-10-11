<script lang="ts">
	import type { Entry } from 'contentful';
	import Main from 'src/components/Main.svelte';
	import Measure from 'src/components/Measure.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';
	import type { Measure as MeasureType } from 'src/lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let measures: Entry<MeasureType>[] = data.measures;
</script>

<title>Measures | Lydon Lab</title>

<div>
	<Title>Measures</Title>

	<Subtitle>
		Measures used in research by the Lydon Lab.
	</Subtitle>

	<Main>
		<div>
			{#each measures as measure (measure.sys.id)}
				<Measure entry={measure} />
			{/each}
		</div>
	</Main>
</div>

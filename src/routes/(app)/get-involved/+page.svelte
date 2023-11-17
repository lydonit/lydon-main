<script lang="ts">
	import Card from 'src/components/Card.svelte';
	import Link from 'src/components/Link.svelte';
	import Main from 'src/components/Main.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	import type { PageData } from './$types';
	import RichText from 'src/components/RichText.svelte';

	export let data: PageData;

	let involved = data.involved;
</script>

<title>Get Involved | Lydon Lab</title>

<div>
	<Title>Get Involved</Title>
	<Subtitle>
		There are many ways of getting involved with the Lydon Lab, including volunteer and paid
		opportunities.
	</Subtitle>

	<Main>
		{#each involved as entry}
			<Card title={entry.fields.title}>
				<RichText rich={entry.fields.description} />
			</Card>
		{/each}
	</Main>
</div>

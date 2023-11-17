<script lang="ts">
	import Card from 'src/components/Card.svelte';
	import Main from 'src/components/Main.svelte';
	import RichText from 'src/components/RichText.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	export let data: import('./$types').PageData;

	let research = data.research;
</script>

<title>Research | Lydon Lab</title>

<div>
	<Title>Research</Title>
	<Subtitle>
		Our research is devoted to the formation and maintenance of intimate social bonds.
	</Subtitle>

	<Main>
		{#each research as entry}
			<Card title={entry.fields.title}>
				<RichText rich={entry.fields.description} />
			</Card>
		{/each}
	</Main>
</div>

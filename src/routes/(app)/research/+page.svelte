<script lang="ts">
	import Card from 'src/components/Card.svelte';
	import Main from 'src/components/Main.svelte';
	import RichText from 'src/components/RichText.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	export let data: import('./$types').PageData;

	let research = data.research;
  console.log(research)
</script>

<title>Research | Lydon Lab</title>

<div>
	<Title>Research</Title>
	<Subtitle>
		Our research is devoted to the formation and maintenance of intimate social bonds.
	</Subtitle>

	<Main>
		{#each research as entry}
      <div class="flex flex-col md:flex-row md:items-center mb-10">
        {#if entry.fields.profile}
          <img class="w-40 h-40 mr-8 mb-4 md:mb-0 rounded-md" src={"https://" + entry.fields.profile.fields.file.url.substr(2)} alt={entry.fields.profile.fields.file.url} />
        {/if}
        <Card title={entry.fields.title} margin={false}>
          <RichText rich={entry.fields.description} />
        </Card>
      </div>
		{/each}
	</Main>
</div>

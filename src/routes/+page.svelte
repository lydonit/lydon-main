<script lang="ts">
	import Cover from 'src/components/Cover.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';
	import type { PageData } from './$types';
	import RichText from 'src/components/RichText.svelte';

	export let data: PageData;

	let descriptions = data.descriptions;
</script>

<title>Lydon Lab</title>

<Cover>
	<div class="text-lg -mt-12 w-full lg:w-3/5 transition-all">
		<Title>The Lydon Lab</Title>
		<Subtitle>Department of Psychology at McGill University</Subtitle>

		<div class="mt-16 flex flex-col gap-y-4">
			{#each descriptions as description}
				<div class="first:font-semibold">
					<RichText rich={description.fields.description} />
				</div>
			{/each}

			<a href="/research" class="w-fit">
				<button class="mt-4 w-fit px-6 py-2 rounded-xl bg-primary text-white">
					Learn more
				</button>
			</a>
		</div>

	</div>

  <div class="absolute bottom-4 italic text-gray-200">
    Logo designed by Salomé Duhamel
  </div>
</Cover>

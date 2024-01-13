<script lang="ts">
	import type { Entry } from 'contentful';
	import Main from 'src/components/Main.svelte';
	import Publication from 'src/components/Publication.svelte';
	import SortBy from 'src/components/SortBy.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';
	import type { Pub } from 'src/lib/types';
	import type { PageData } from './$types';
	import FilterBy from 'src/components/FilterBy.svelte';

	type SortType = 'asc' | 'desc';

	export let data: PageData;

  let checked = false;

	let publications: Entry<Pub>[] = data.pubs;
	let sortby: SortType = 'desc';
  let topics = Array.from(new Set(publications.map(x => x.fields.topic).filter(x => x)));
  console.log(topics)

	$: publications = sorted(publications, sortby);
  

	function sorted(pubs: Entry<Pub>[], sortby: SortType) {
		let sorted = pubs.slice().sort((a, b) => {
			let year1 = !a.fields.year ? 9999 : a.fields.year;
			let year2 = !b.fields.year ? 9999 : b.fields.year;

			return year1 - year2;
		});

		return sortby === 'desc' ? sorted.slice().reverse() : sorted;
	}

	function onclick() {
		if (sortby === 'asc') sortby = 'desc';
		else sortby = 'asc';
	}
</script>

<title>Publications | Lydon Lab</title>

<div>
	<Title>Publications</Title>
	<Subtitle>
		There are {publications.length} publications written by the Lydon Lab.
	</Subtitle>
	<Main>
		<div class="mb-6 text-gray-600 flex flex-row gap-x-4 items-center">
			<SortBy {onclick} {sortby} />
      <!-- <FilterBy {checked} /> -->
		</div>

		<div>
			{#each publications as publication (publication.sys.id)}
				<Publication entry={publication} />
			{/each}
		</div>
	</Main>
</div>

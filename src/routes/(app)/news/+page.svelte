<script lang="ts">
	import Link from 'src/components/Link.svelte';
	import Main from 'src/components/Main.svelte';

	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	import type { PageData } from './$types';
	import RichText from 'src/components/RichText.svelte';

	export let data: PageData;
	let news = data.news;
</script>

<title>News | Lydon Lab</title>

<div>
	<Title>News</Title>
	<Subtitle>Announcements and news from the lab!</Subtitle>

	<Main>
		{#each news as post}
			<div class="first:border-t border-b py-6 px-2">
				<div class="text-2xl font-bold mb-2">{post.fields.title}</div>
				<div class="text-gray-700 mb-2">{post.fields.date}</div>
				<RichText rich={post.fields.description} />
			</div>
		{/each}
	</Main>
</div>

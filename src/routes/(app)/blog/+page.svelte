<script lang="ts">
	import Link from 'src/components/Link.svelte';
	import Main from 'src/components/Main.svelte';

	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	import type { PageData } from './$types';
	import RichText from 'src/components/RichText.svelte';

	export let data: PageData;
	let blog = data.blog;
</script>

<title>Blog | Lydon Lab</title>

<div>
	<Title>Blog</Title>
	<Subtitle>See below for summaries of recently published research in social psychology, written by our volunteers.</Subtitle>

	<Main>
		{#each blog as post}
			<div class="first:border-t border-b py-6 px-2">
				<div class="text-2xl font-bold mb-2">{post.fields.title}</div>
				<div class="text-gray-600 mb-2">Written By: <span class="text-black">{post.fields.author}</span> <span class="px-2"></span> Published: <span class="text-black">{post.fields.date}</span></div>
				<RichText rich={post.fields.description} />
			</div>
		{/each}
	</Main>
</div>

<script lang="ts">
	import type { RichTextContent } from 'contentful';
	import Link from './Link.svelte';

	export let rich: RichTextContent;
</script>

{#if rich.nodeType === 'document'}
	{#if rich.content}
		{#each rich.content as sentence}
			<div>
				<svelte:self rich={sentence} />
			</div>
		{/each}
	{/if}
{:else if rich.nodeType === 'paragraph'}
	{#if rich.content}
		{#each rich.content as sentence}
			<svelte:self rich={sentence} />
		{/each}
	{/if}
{:else if rich.nodeType === 'text'}
	{rich.value}
{:else if rich.nodeType === 'hyperlink'}
	<span>
		<Link href={rich.data.uri}>
			{#if rich.content}
				{#each rich.content as sentence}
					<svelte:self rich={sentence} />
				{/each}
			{/if}
		</Link>
	</span>
{/if}

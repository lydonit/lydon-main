<script>
	export let route = '';
	export let display = '';
	export let style = 'row';
</script>

{#if style === 'row'}
	<a class="first:pl-0 px-4 font-medium" href={route}>
		{display}
	</a>
{:else}
	<a class="py-2 px-6 hover:bg-fg2 transition font-medium" href={route}>
		{display}
	</a>
{/if}

<script lang="ts">
	export let sortby: 'asc' | 'desc';
	export let onclick: any;
</script>

<button class="border rounded-full px-4 py-1 flex flex-row items-center gap-x-1" on:click={onclick}>
	{#if sortby === 'desc'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>

		Year: Descending
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>

		Year: Ascending
	{/if}
</button>

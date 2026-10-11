<script lang="ts">
	export let measureAccess: string | undefined;
</script>

{#if measureAccess}
	<a href={measureAccess} target="_blank" rel="noopener noreferrer">
		<button class="flex flex-row items-center gap-x-2">
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="flex-shrink-0"
			>
				<rect x="2" y="7" width="20" height="10" rx="1.5" />
				<line x1="6" y1="7" x2="6" y2="11" />
				<line x1="10" y1="7" x2="10" y2="13" />
				<line x1="14" y1="7" x2="14" y2="11" />
				<line x1="18" y1="7" x2="18" y2="13" />
			</svg>

			Access Measure
		</button>
	</a>
{/if}

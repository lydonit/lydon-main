<script>
	export let title = '';
</script>

<div class="mb-10">
	<div class="text-2xl font-semibold mb-4">{title}</div>

	<div class="flex flex-col gap-y-4">
		<slot />
	</div>
</div>

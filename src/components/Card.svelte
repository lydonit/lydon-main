<script>
	export let title = '';
  export let margin = true;
</script>

<div class={margin ? "mb-10" : ""}>
	<div class="text-2xl font-semibold mb-4">{title}</div>

	<div class="flex flex-col gap-y-4">
		<slot />
	</div>
</div>

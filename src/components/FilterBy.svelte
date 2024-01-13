<script lang="ts">
	export let checked;

  const onclick = () => {
    checked = !checked
  }
</script>

<button class="border rounded-full px-4 py-1 flex flex-row items-center gap-x-1" on:click={onclick}>
  <input type="checkbox" checked={checked} class="checkbox" />
</button>

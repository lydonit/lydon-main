<script>
	export let members;
</script>

<div class="text-2xl font-medium pb-2">Thesis Students</div>
{#each members.filter(x => x.fields.subType === 'Thesis Students') as member}
	<div>
		{member.fields.description}
	</div>
{/each}

<div class="text-2xl font-medium pb-2 pt-4">Research Assistants</div>
{#each members.filter(x => x.fields.subType === 'Research Assistants') as member}
	<div>
		{member.fields.description}
	</div>
{/each}

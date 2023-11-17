<script lang="ts">
	import LabMember from 'src/components/LabMember.svelte';
	import Main from 'src/components/Main.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';
	import type { PageData } from './$types';
	import Link from 'src/components/Link.svelte';

	export let data: PageData;

	let members = data.members;

	let memberTypes = new Set();

	members.forEach((x) => {
		if (x.fields.type) memberTypes.add(x.fields.type);
	});

	console.log(memberTypes);
</script>

<title>Alumni | Lydon Lab</title>

<div>
	<Title>Alumni</Title>
	<Subtitle
		>Our lab has {members.length} alumni up to date. <Link href="/lab-members"
			>See our current lab members.</Link
		></Subtitle
	>

	<Main>
		{#each Array.from(memberTypes) as memberType}
			<div class="mb-8">
				<div class="text-3xl font-bold mb-4">{memberType}</div>
				<div class="space-y-1">
					{#each members.filter((x) => x.fields.type === memberType) as member}
						<div>
							{member.fields.description}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</Main>
</div>

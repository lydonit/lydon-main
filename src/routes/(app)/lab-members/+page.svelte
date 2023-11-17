<script lang="ts">
	import LabMember from 'src/components/LabMember.svelte';
	import Main from 'src/components/Main.svelte';
	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';
	import type { PageData } from './$types';
	import Link from 'src/components/Link.svelte';

	export let data: PageData;

	let members = data.members;
	let alumni = data.alumni;
</script>

<title>Lab Members | Lydon Lab</title>

<div>
	<Title>Lab Members</Title>
	<Subtitle
		>Our lab currently has {members.length} members and <Link href="/lab-members/alumni"
			>{alumni.length} alumni</Link
		>.
	</Subtitle>

	<Main>
		{#each members as member}
			<LabMember {member} />
		{/each}
	</Main>
</div>

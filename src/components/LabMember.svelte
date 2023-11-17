<script lang="ts">
	import type { Entry } from 'contentful';
	import RichText from './RichText.svelte';

	export let member: Entry<any>;
</script>

<div class="flex flex-row mb-8 items-center gap-x-4">
	<img
		src={member.fields.profile.fields.file?.url}
		class="object-cover rounded-lg w-48"
		alt="Profile"
	/>
	<div>
		<div class="mb-4">
			<div class="text-xl font-bold">{member.fields.fullName}</div>
			<div class="">{member.fields.memberType}</div>

			{#if member.fields.email}
				<div class="text-gray-500">{member.fields.email}</div>
			{/if}
		</div>

		<div>
			<RichText rich={member.fields.description} />
		</div>
	</div>
</div>

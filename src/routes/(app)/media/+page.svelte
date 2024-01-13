<script lang="ts">
	import Link from 'src/components/Link.svelte';
	import Main from 'src/components/Main.svelte';

	import Subtitle from 'src/components/Subtitle.svelte';
	import Title from 'src/components/Title.svelte';

	import type { PageData } from './$types';
	import Card from 'src/components/Card.svelte';

	export let data: PageData;
	let media = data.media;

	function formatDate(inputDate) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const dateParts = inputDate.split('-');
		const year = dateParts[0];
		const monthIndex = parseInt(dateParts[1], 10) - 1;
		const day = parseInt(dateParts[2], 10);

		const monthName = months[monthIndex];

		let daySuffix = 'th';
		if (day === 1 || day === 21 || day === 31) {
			daySuffix = 'st';
		} else if (day === 2 || day === 22) {
			daySuffix = 'nd';
		} else if (day === 3 || day === 23) {
			daySuffix = 'rd';
		}

		const formattedDate = `${monthName} ${day}${daySuffix}, ${year}`;
		return formattedDate;
	}
</script>

<title>Media | Lydon Lab</title>

<div>
	<Title>Media</Title>
	<Subtitle>Media appearances of Lydon Lab research</Subtitle>

	<Main>
		<!-- <div class="text-2xl mb-6">2023</div> -->
		{#each media as appearance}
			<div class="first:border-t border-b py-4 text-lg">
				<div class="mb-1">
					<a class="text-primary font-semibold" href={appearance.fields.link}>
						{appearance.fields.title}
					</a>
				</div>
				<div class="font-light">
					{appearance.fields.publisher},

					<span class="text-gray-700 font-light">{formatDate(appearance.fields.date)}</span>
				</div>
			</div>
		{/each}
	</Main>
</div>

import type { Entry } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getMedia() {
		const entries = await client.getEntries({ content_type: 'media' });
		const media = entries.items as Entry<{
			title: string;
			link: string;
			publisher: string;
			date: string;
		}>[];

		media.sort((x, y) => (x.fields.date < y.fields.date ? -1 : 1)).reverse();

		return media;
	}

	return {
		media: await getMedia()
	};
}

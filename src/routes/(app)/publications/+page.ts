import client from 'src/lib/db';
import type { Entry } from 'contentful';
import type { Pub } from 'src/lib/types';

export async function load() {
	async function getPublications() {
		const entries = await client.getEntries({ content_type: 'journalArticle' });
		return entries.items as Entry<Pub>[];
	}

	return {
		pubs: await getPublications()
	};
}

import type { Entry, RichTextContent } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getInvolved() {
		const entries = await client.getEntries({ content_type: 'getInvolved' });
		const involved = entries.items as Entry<{
			title: string;
			description: RichTextContent;
			rank: number;
		}>[];

		involved.sort((x, y) => x.fields.rank - y.fields.rank);

		return involved;
	}

	return {
		involved: await getInvolved()
	};
}

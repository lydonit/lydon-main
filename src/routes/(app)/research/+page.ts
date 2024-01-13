import type { Entry, RichTextContent } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getResearch() {
		const entries = await client.getEntries({ content_type: 'researchDescription' });
		const research = entries.items as Entry<{
			title: string;
			description: RichTextContent;
			order: number;
      profile?: any;
		}>[];

		research.sort((x, y) => {
			return x.fields.order - y.fields.order;
		});

		return research;
	}

	return {
		research: await getResearch()
	};
}

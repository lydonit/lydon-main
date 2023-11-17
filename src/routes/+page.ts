import type { Entry, RichTextContent } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getDescriptions() {
		const entries = await client.getEntries({ content_type: 'home' });
		const descriptions = entries.items as Entry<{
			description: RichTextContent;
			order: number;
		}>[];

		descriptions.sort((x, y) => {
			return x.fields.order - y.fields.order;
		});

		return descriptions;
	}

	return {
		descriptions: await getDescriptions()
	};
}

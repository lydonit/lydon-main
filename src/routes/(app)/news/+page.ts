import type { Entry, RichTextContent } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getNews() {
		const entries = await client.getEntries({ content_type: 'news' });
		const news = entries.items as Entry<{
			title: string;
			description: RichTextContent;
			date: string;
		}>[];

		news.sort((x, y) => (x.fields.date < y.fields.date ? -1 : 1)).reverse();

		return news;
	}

	return {
		news: await getNews()
	};
}

import client from 'src/lib/db';
import type { Entry } from 'contentful';
import type { Measure } from 'src/lib/types';

export async function load() {
	async function getMeasures() {
		const entries = await client.getEntries({ content_type: 'measures' });
		return entries.items as Entry<Measure>[];
	}

	return {
		measures: await getMeasures()
	};
}

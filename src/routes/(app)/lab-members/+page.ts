import type { Entry } from 'contentful';
import client from 'src/lib/db';

export async function load() {
	async function getLabMembers() {
		const entries = await client.getEntries({ content_type: 'member' });

		const members = entries.items as Entry<any>[];

		members.sort((x, y) => {
			return x.fields.order - y.fields.order;
		});

		return members;
	}

	async function getAlumni() {
		const entries = await client.getEntries({ content_type: 'alumniMember' });

		const members = entries.items as Entry<any>[];

		return members;
	}

	return {
		members: await getLabMembers(),
		alumni: await getAlumni()
	};
}

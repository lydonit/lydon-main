import * as contentful from 'contentful';

let func = contentful.default ? contentful.default.createClient : contentful.createClient

/** @type {import('contentful').ContentfulClientApi} */
const client = func({
	space: '0k6s50brilx1',
	accessToken: 'pEblg0SCgbmaXS1FZ-4qPgq7_QrZrMh4Yyb38K7T1pk'
});

export default client;

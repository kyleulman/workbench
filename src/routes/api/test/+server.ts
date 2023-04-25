import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { client } from './mongodb';

export const GET = (async () => {
	const call = await client.db('blog').collection('articles').find().toArray();

	console.log(call);

	return json({
		hello: 'world'
	});
}) satisfies RequestHandler;

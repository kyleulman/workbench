import {
	authenticateCode,
	authenticateCredentials
} from '../../_/authenticate';
import { updateOne, type UpdateQuery } from '../../_/mongodb';
import { locationSessions } from '../../_/utilities';
import { validateCredentials } from '../../_/validate';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// * Create/update session
export const PUT = (async ({ request }) => {
	const userAgent = request.headers.get('user-agent') || '';
	const body = await request.json();

	let user;

	if (body.email && body.password) {
		validateCredentials(body.email, body.password);
		user = await authenticateCredentials(body.email, body.password);
	} else if (body.key && body.value) {
		user = await authenticateCode(body.key, body.value);
	} else {
		throw error(400);
	}

	const updateQuery: UpdateQuery = {
		filter: { userId: user._id, userAgent },
		update: {
			$setOnInsert: { userId: user._id, userAgent },
			$set: { updated: Date.now() }
		},
		options: { upsert: true }
	};

	const updatedSession = await updateOne(locationSessions, updateQuery);

	return json({ updatedSession });
}) satisfies RequestHandler;

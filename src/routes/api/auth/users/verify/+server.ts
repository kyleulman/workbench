import {
	authenticateCode,
	authenticateCredentials
} from '../../../_/authenticate';
import { updateMany, updateOne, type UpdateQuery } from '../../../_/mongodb';
import { sendVerificationEmail } from '../../../_/postmark';
import { locationSessions, locationUsers } from '../../../_/utilities';
import { validateCredentials } from '../../../_/validate';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// * Resend verification email
export const POST = (async ({ request }) => {
	const requestOrigin = request.headers.get('origin') || '';
	const body = await request.json();

	validateCredentials(body.email, body.password);

	const user = await authenticateCredentials(body.email, body.password);
	const verification = crypto.randomUUID();

	const updateQuery: UpdateQuery = {
		filter: { email: user.email },
		update: { $set: { verification } }
	};

	const updatedUser = await updateOne(locationUsers, updateQuery);

	const sentEmail = await sendVerificationEmail(
		requestOrigin,
		verification,
		user.email
	);

	return json({ updatedUser, sentEmail });
}) satisfies RequestHandler;

// * Verify user
export const GET = (async ({ url }) => {
	const verification = url.searchParams.get('verification') || '';

	const user = await authenticateCode('verification', verification);

	const updateUserQuery: UpdateQuery = {
		filter: { verification },
		update: { $set: { verification: null } }
	};

	const updatedUser = await updateOne(locationUsers, updateUserQuery);

	const updateSessionsQuery: UpdateQuery = {
		filter: { userId: user._id },
		update: { $set: { isVerified: true, updated: Date.now() } }
	};

	const updatedSessions = await updateMany(
		locationSessions,
		updateSessionsQuery
	);

	return json({ updatedUser, updatedSessions });
}) satisfies RequestHandler;

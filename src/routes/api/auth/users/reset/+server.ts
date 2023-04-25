import {
	authenticateCode,
	authenticateEmail,
	authenticatePassword
} from '../../../_/authenticate';
import { updateOne, type UpdateQuery } from '../../../_/mongodb';
import { sendResetEmail } from '../../../_/postmark';
import { encryptPassword, locationUsers } from '../../../_/utilities';
import {
	validateConfirmPassword,
	validateEmail,
	validatePassword
} from '../../../_/validate';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// * Send reset email
export const POST = (async ({ request }) => {
	const body = await request.json();

	validateEmail(body.email);

	const user = await authenticateEmail.approve(body.email);

	user.reset = crypto.randomUUID();

	const updateQuery: UpdateQuery = {
		filter: { email: user.email },
		update: { $set: user }
	};

	const updatedUser = await updateOne(locationUsers, updateQuery);

	const sentResetEmail = await sendResetEmail(
		request.headers.get('origin') as string,
		user.reset,
		user.email
	);

	return json({ updatedUser, sentResetEmail });
}) satisfies RequestHandler;

// * Reset password
export const PUT = (async ({ url, request }) => {
	const reset = url.searchParams.get('reset') || '';
	const body = await request.json();

	validatePassword(body.password);
	validateConfirmPassword(body.password, body.confirmPassword);

	const user = await authenticateCode('reset', reset);

	authenticatePassword.deny(user.password, body.password);

	user.password = encryptPassword(body.password);
	user.reset = null;

	const updateQuery: UpdateQuery = {
		filter: { reset },
		update: { $set: user }
	};

	const updatedUser = await updateOne(locationUsers, updateQuery);

	// TODO: Log user out & deleteSessions

	return json({ updatedUser });
}) satisfies RequestHandler;

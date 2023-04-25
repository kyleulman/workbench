import {
	authenticateCredentials,
	authenticateVerified,
	authenticateEmail,
	authenticatePassword
} from '../../_/authenticate';
import {
	deleteOne,
	insertOne,
	updateOne,
	type DeleteOneQuery,
	type InsertOneQuery,
	type UpdateQuery
} from '../../_/mongodb';
import { sendVerificationEmail } from '../../_/postmark';
import { encryptPassword, locationUsers } from '../../_/utilities';
import {
	validateConfirmPassword,
	validateEmail,
	validateNewEmailOrPassword,
	validatePassword
} from '../../_/validate';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// * Create user
export const POST = (async ({ request }) => {
	const body = await request.json();

	validateEmail(body.email);
	validatePassword(body.password);

	await authenticateEmail.deny(body.email);

	const user = {
		email: body.email,
		password: encryptPassword(body.password),
		verification: crypto.randomUUID(),
		reset: null
	};

	const insertQuery: InsertOneQuery = {
		doc: user
	};

	const insertedUser = await insertOne(locationUsers, insertQuery);

	const sentVerificationEmail = await sendVerificationEmail(
		request.headers.get('origin') || '',
		user.verification,
		user.email
	);

	return json({ insertedUser, sentVerificationEmail });
}) satisfies RequestHandler;

// * Update user
export const PUT = (async ({ request }) => {
	const body = await request.json();

	validateNewEmailOrPassword(body.newEmail, body.newPassword);
	validateEmail(body.email);
	validatePassword(body.password);

	const user = await authenticateCredentials(body.email, body.password);

	authenticateVerified(user.verification);

	if (body.newEmail) {
		validateEmail(body.newEmail);

		await authenticateEmail.deny(body.newEmail);

		user.email = body.newEmail;
	}

	if (body.newPassword) {
		validatePassword(body.newPassword);
		validateConfirmPassword(body.newPassword, body.confirmPassword);

		authenticatePassword.deny(user.password, body.newPassword);

		user.password = encryptPassword(body.newPassword);
	}

	const updateUserQuery: UpdateQuery = {
		filter: { email: body.email },
		update: { $set: user }
	};

	const updatedUser = await updateOne(locationUsers, updateUserQuery);

	return json({ updatedUser });
}) satisfies RequestHandler;

// * Delete user
export const DELETE = (async ({ request }) => {
	const body = await request.json();

	validateEmail(body.email);
	validatePassword(body.password);

	const user = await authenticateCredentials(body.email, body.password);

	const deletedQuery: DeleteOneQuery = { filter: { _id: user._id } };

	const deletedUser = await deleteOne(locationUsers, deletedQuery);

	// TODO: deleteSessions

	return json({ deletedUser });
}) satisfies RequestHandler;

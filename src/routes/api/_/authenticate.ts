import { error } from '@sveltejs/kit';
import {
	mismatchCode,
	mismatchPassword,
	notFoundEmail,
	preexistingEmail,
	preexistingPassword,
	unverifiedUser
} from './errors';
import { findOne, type FindOneQuery } from './mongodb';
import { locationUsers, verifyPassword } from './utilities';

// * Credentials
export async function authenticateCredentials(email: string, password: string) {
	const user = await authenticateEmail.approve(email);

	authenticatePassword.approve(user.password, password);

	return user;
}

export const authenticateEmail = {
	// return if email exists
	approve: async (email: string) => {
		const user = await findOne(locationUsers, { filter: { email: email } });

		if (!user) {
			throw error(...notFoundEmail);
		}

		return user;
	},
	// throw if email exists
	deny: async (email: string) => {
		const user = await findOne(locationUsers, { filter: { email: email } });

		if (user) {
			throw error(...preexistingEmail);
		}

		return undefined;
	}
};

export const authenticatePassword = {
	// return if password matches
	approve: (storedPassword: string, inputPassword: string) => {
		if (!verifyPassword(storedPassword, inputPassword)) {
			throw error(...mismatchPassword);
		}
	},
	// throw if password matches
	deny: (storedPassword: string, inputPassword: string) => {
		if (verifyPassword(storedPassword, inputPassword)) {
			throw error(...preexistingPassword);
		}
	}
};

export async function authenticateCode(key: string, value: string) {
	const findQuery: FindOneQuery = { filter: { [key]: value } };

	// return if code exists
	const user = await findOne(locationUsers, findQuery);

	if (!user) {
		throw error(...mismatchCode);
	}

	return user;
}

export function authenticateVerified(verification: string | null) {
	// return if verified
	if (verification !== null) {
		throw error(...unverifiedUser);
	}
}

import type { Location } from './mongodb';

// * Constants
export const locationUsers: Location = {
	db: 'auth',
	collection: 'users'
};

export const locationSessions: Location = {
	db: 'auth',
	collection: 'sessions'
};

// * Internal Fetch Wrappers
export async function putSession(
	f: typeof fetch,
	headers: { authorization: string; userAgent: string; origin: string },
	body: { key: string; value: string }
) {
	const res = await f('/auth/sessions', {
		method: 'put',
		headers: {
			authorization: headers.authorization,
			'user-agent': headers.userAgent,
			origin: headers.origin,
			'content-type': 'application/json',
			accept: 'application/json'
		},
		body: JSON.stringify(body)
	});

	return await res.json();
}

// * Handle Password
const { scryptSync, randomBytes } = await import('node:crypto');

export function verifyPassword(storedPassword: string, inputPassword: string) {
	const [salt, key] = storedPassword.split(':');
	const derivedKey = scryptSync(inputPassword, salt, 64);
	return derivedKey.toString('hex') === key;
}

export function encryptPassword(inputPassword: string) {
	const password = inputPassword.normalize(); // see https://nodejs.org/api/crypto.html#using-strings-as-inputs-to-cryptographic-apis
	const salt = randomBytes(16).toString('hex').normalize();
	const key = scryptSync(password, salt, 64).toString('hex');
	return salt + ':' + key;
}

// * Object Parsers
export function searchParamsToObject(params: URLSearchParams) {
	const filter: { [index: string]: string | null } = {};

	for (const key of params.keys()) {
		let value = params.get(key);

		if (value === 'true' || value === 'false') {
			value = JSON.parse(value);
		}

		filter[key] = value;
	}

	return filter;
}

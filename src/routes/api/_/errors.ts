// TODO: Standardize these
type ErrorArr = [number, { id: string; message: string }];

export const invalidEmail: ErrorArr = [
	400,
	{
		id: 'invalid-email',
		message:
			'Email address is invalid, please check your information and try again.'
	}
];
export const invalidPassword: ErrorArr = [
	400,
	{
		id: 'invalid-password',
		message:
			'Password must include at least one lowercase letter, one uppercase letter, one number, one symbol, and be at least 8 characters long.'
	}
];
export const notFoundEmail: ErrorArr = [
	400,
	{
		id: 'not-found-email',
		message: 'Account not found, please check your information and try again.'
	}
];
export const preexistingEmail: ErrorArr = [
	400,
	{
		id: 'preexisting-email',
		message:
			'User could not be created, please check your information and try again.'
	}
];
export const preexistingPassword: ErrorArr = [
	400,
	{
		id: 'preexisting-password',
		message: 'Please do not use a preexisting password.'
	}
];
export const mismatchCode: ErrorArr = [
	400,
	{
		id: 'mismatch-code',
		message: 'Code mismatch.'
	}
];
export const mismatchPassword: ErrorArr = [
	400,
	{
		id: 'mismatch-password',
		message: 'Account not found, please check your information and try again.'
	}
];
export const unverifiedUser: ErrorArr = [
	400,
	{
		id: 'unverified-user',
		message: 'User is not verified.'
	}
];
export const noNewEmailOrPassword: ErrorArr = [
	400,
	{
		id: 'no-new-email-or-password',
		message: 'Please enter a new email and/or a new password.'
	}
];

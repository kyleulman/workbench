import { error } from '@sveltejs/kit';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import {
	invalidEmail,
	invalidPassword,
	mismatchPassword,
	noNewEmailOrPassword
} from './errors';

export function validateCredentials(email: string, password: string) {
	validateEmail(email);
	validatePassword(password);
}

export function validateEmail(email: string) {
	if (isEmail(email) === false) {
		throw error(...invalidEmail);
	}
}

export function validatePassword(password: string) {
	if (isStrongPassword(password) === false) {
		throw error(...invalidPassword);
	}
}

export function validateConfirmPassword(
	password: string,
	confirmPassword: string
) {
	if (password !== confirmPassword) {
		throw error(...mismatchPassword);
	}
}

export function validateNewEmailOrPassword(
	newEmail: string,
	newPassword: string
) {
	if (!newEmail && !newPassword) {
		throw error(...noNewEmailOrPassword);
	}
}

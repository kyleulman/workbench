// import { ServerClient, type Message } from 'postmark';
import type { Message } from 'postmark';

// const p = new ServerClient(import.meta.env.VITE_POSTMARK_TOKEN);

async function sendEmail(message: Message) {
	return { message };

	// try {
	// 	return await p.sendEmail(message);
	// } catch (error) {
	// 	if (error instanceof Error) {
	// 		console.log(error);
	// 	}
	// 	throw error;
	// }
}

export async function sendVerificationEmail(
	requestOrigin: string,
	verification: string,
	email: string
) {
	const url = `${requestOrigin}/?verification=${verification}`;

	const message: Message = {
		From: 'kyle@ulman.digital',
		To: email,
		Subject: 'Verify your account',
		HtmlBody: `<strong>Hello</strong> dear Postmark user. Please click the link to verify your account: ${url}`,
		TextBody: `Hello from Postmark! Please follow the link to verify your account: ${url}`,
		MessageStream: 'outbound'
	};

	return await sendEmail(message);
}

export async function sendResetEmail(
	requestOrigin: string,
	reset: string,
	email: string
) {
	const url = `${requestOrigin}/?reset=${reset}`;

	const message: Message = {
		From: 'kyle@ulman.digital',
		To: email,
		Subject: 'Reset your password',
		HtmlBody: `<strong>Hello</strong> dear Postmark user. Please click the link to reset your password: ${url}`,
		TextBody: `Hello from Postmark! Please follow the link to reset your password: ${url}`,
		MessageStream: 'outbound'
	};

	return await sendEmail(message);
}

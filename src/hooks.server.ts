import type { Handle } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	if (event.url.pathname === '/api') authorize(event.request.headers);

	return await resolve(event);
}) satisfies Handle;

export function authorize(headers: Headers) {
	if (
		!import.meta.env.VITE_URL_WHITELIST.includes(
			headers.get('origin') as string
		) ||
		`Bearer ${import.meta.env.VITE_ADMIN_TOKEN}` !==
			headers.get('authorization')
	) {
		throw error(401);
	}
}

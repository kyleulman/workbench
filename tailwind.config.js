import path from 'path';
import skeletonPlugin from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		path.join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			fontFamily: {
				"material-outlined": "Material\\ Symbols\\ Outlined"
			}
		}
	},
	plugins: [...skeletonPlugin()]
};

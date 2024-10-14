/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				colorbg: '#060022',
				colorfg: '#a2ffef',
				colorYellow: '#c2cf2b'
			}
		},
	},
	plugins: [],
}

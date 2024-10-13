import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
			fontFamily: {
				headline: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
			},
    		colors: {}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}

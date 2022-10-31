import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  base: "/HTMLCSS-Sveltekit/",
  plugins: [sveltekit({ experimental: { inspector: true } })]
};

export default config;

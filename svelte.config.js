import preprocess from "svelte-preprocess";
//import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? "" : "/HTMLCSS-Sveltekit",
    },
  },

  vitePlugin: {
    experimental: { inspector: true },
  },

  preprocess: [
    preprocess({

    }),
  ],
};

export default config;

import preprocess from "svelte-preprocess";
//import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

// doesn't work when building
const dev = process.env.NODE_ENV || "development";

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
      base: "/HTMLCSS-Sveltekit",
    },
  },

  vitePlugin: {
    experimental: { inspector: true },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;

import adapter from '@sveltejs/adapter-auto';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "" : "/HTMLCSS-Sveltekit/",
    }
  }
};

export default config;

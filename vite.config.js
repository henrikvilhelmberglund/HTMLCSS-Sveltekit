import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import examples from 'mdsvexamples/vite'

/** @type {import('vite').UserConfig} */
// const config = {
//   plugins: [sveltekit()],
//   ssr: {
//     noExternal: ['three', 'troika-three-text']
//   }
// };

// export default config;

export default defineConfig({
  plugins: [
    { ...threeMinifier(), enforce: "pre" }, // <=== Add plugin here
    examples,
    sveltekit(),
  ],
  ssr: {
    noExternal: ["three", "troika-three-text"],
  },
  build: {
    target: "esnext",
  },
});

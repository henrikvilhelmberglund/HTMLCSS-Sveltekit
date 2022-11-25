import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: "/src/routes/svelte-course/mdsvex-layout.svelte",
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;

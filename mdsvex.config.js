import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte", ".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
    notes: "/src/routes/svelte-course/mdsvex-layout.svelte",
  },
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;

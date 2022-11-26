import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
    notes: "/src/routes/svelte-course/mdsvex-layout-notes.svx",
    mainpage: "/src/routes/svelte-course/mdsvex-layout-mainpage.svx",
  },
  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;

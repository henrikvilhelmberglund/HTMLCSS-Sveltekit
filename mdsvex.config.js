import { defineMDSveXConfig as defineConfig } from "mdsvex";
import examples from "mdsvexamples";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
    notes: "/src/routes/svelte-course/mdsvex-layout-notes.svx",
    mainpage: "/src/routes/svelte-course/mdsvex-layout-mainpage.svx",
  },
  remarkPlugins: [
    examples,
    {
      defaults: {
        Wrapper: "src/lib/Example.svelte",
      },
    },
  ],
  rehypePlugins: [],
});

export default config;

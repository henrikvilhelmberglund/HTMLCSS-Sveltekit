const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,svelte,svx}"],
  theme: {
    extend: {
      fontFamily: {
        duckName: ["Elsie"],
        duckDesc: ["Genos"],
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

module.exports = config;

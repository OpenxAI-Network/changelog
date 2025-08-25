export default {
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
  ],
  content: {
    highlight: {
      theme: "nord",
      preload: [
        "js",
        "css",
        "html",
        "md",
        "ts",
        "tsx",
        "vue",
        "python",
        "ruby",
        "java",
      ],
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
    display: "swap",
  },
};

import { resolve } from "path";

export default {
  ssr: true,
  target: "static",
  rootDir: "./",
  srcDir: "./src",
  head: {
    title: "Batakköylü Düğün Salonu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#000000" },
      {
        name: "og:title",
        content: "Batakköylü Düğün Salonu",
      },
      {
        name: "description",
        content:
          "Batakköylü Düğün Salonu, tüm cemiyetleriniz için sizlerin hizmetinde.",
      },
      {
        name: "og:description",
        content:
          "Batakköylü Düğün Salonu, tüm cemiyetleriniz için sizlerin hizmetinde.",
      },
      {
        name: "og:image",
        content: "/images/logo.png",
      },
      {
        name: "keywords",
        content:
          "sakarya, akyazı, akyazi, düğün, salonu, düğün salonu, düğün, kına, kına gecesi, yemekli, organizasyon, nikah salonu, nikah, nişan, nişan organizasyonu, büyük salon, lüks salon",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap",
      },
    ],
  },
  css: ["@/stylesheets/root.sass"],
  plugins: [
    {
      mode: "client",
      src: "@/plugins/maps.js",
    },
  ],
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
  components: true,
  modules: ["nuxt-buefy"],
  buildModules: [["@nuxtjs/dotenv", { path: resolve("./") }]],
};

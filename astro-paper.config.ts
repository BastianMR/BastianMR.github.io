import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://bastianmr.github.io",
    title: "IA, Finanzas y Código",
    description:
      "Blog de Tweakers_BAMR: inteligencia artificial, finanzas, proyectos de código y vida de tanque en WoW.",
    author: "Tweakers_BAMR",
    profile: "https://github.com/BastianMR",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Santiago",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: false,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/BastianMR" },
    { name: "linkedin", url: "https://www.linkedin.com/in/bas-marquezriffo/" },
    { name: "x", url: "https://x.com/Tweakers_BAMR" },
    { name: "instagram", url: "https://www.instagram.com/tweakers_bamr/" },
    { name: "platzi", url: "https://platzi.com/p/bastian-marquez-riffo/" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});

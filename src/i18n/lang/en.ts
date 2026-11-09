import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    news: "News",
    projects: "Projects",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  hud: {
    index: "Index",
    online: "All good, more or less",
    posts: "posts",
    kicker: "personal blog",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
    recentNews: "Latest News",
    allNews: "All News",
  },
  news: {
    sourceLabel: "Source",
    categoryLabel: "Category",
  },
  projects: {
    status: {
      idea: "Idea",
      "en-curso": "In progress",
      pausado: "Paused",
      terminado: "Shipped",
      abandonado: "Abandoned",
    },
    stackLabel: "Stack",
    repoLabel: "Repository",
    demoLabel: "Demo",
    empty: "No projects published yet.",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
    incidentsLabel: "no incidents",
    incidentsNote: "except the knight, who crashed into the icons",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    newsTitle: "News",
    newsDesc: "Technology and AI news, each one with its source.",
    newsCategoryTitle: "Category",
    newsCategoryDesc: "All the news in the category",

    projectsTitle: "Projects",
    projectsDesc:
      "What I'm working on, grouped by state: what is alive comes first.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    searchDialogLabel: "Search the site",
    closeSearch: "Close search",
    openSearchPage: "Open the full search page",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;

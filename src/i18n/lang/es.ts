import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Posts",
    tags: "Tags",
    about: "Sobre mí",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte este post:",
    sharePostOn: "Comparte este post en {{platform}}",
    sharePostViaEmail: "Comparte este post por email",
    tagLabel: "Tags",
    backToTop: "Volver arriba",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Post anterior",
    nextPost: "Post siguiente",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    socialLinks: "Redes sociales",
    featured: "Destacado",
    recentPosts: "Posts recientes",
    allPosts: "Todos los posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos los artículos con el tag",

    tagsTitle: "Tags",
    tagsDesc: "Todos los tags usados en los posts.",

    postsTitle: "Posts",
    postsDesc: "Todos los artículos que he publicado.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos archivados.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar posts...",
    noResults: "Sin resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;

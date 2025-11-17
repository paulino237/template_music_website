
const menu_data = [
  {
    id: 1,
    title: "Accueil",
    link: "/",
    has_dropdown: false,
    sub_menus: []
  },
  {
    id: 2,
    title: "Musique",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/#lecteur", title: "Lecteur" },
      { link: "/portfolio", title: "Playlists" },
      { link: "/team", title: "Artistes" },
    ]
  },
  {
    id: 3,
    title: "Catalogue",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Albums", }, 
      { link: "/portfolio-details", title: "Détails de l’album", }, 
    ]
  },
  {
    id: 4,
    title: "Actualités",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Actus", }, 
      { link: "/blog-details", title: "Détail de l’article", }, 
    ]
  },

  {
    id: 5,
    title: "Profil",
    link: "/team-details",
    has_dropdown: false,
    sub_menus: []
  }

]

export default menu_data
export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "accueil",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "recherche",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "activité",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "créer parole",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "communautés",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "profil",
  },
];

export const profileTabs = [
  { value: "threads", label: "paroles", icon: "/assets/reply.svg" },
  { value: "replies", label: "réponses", icon: "/assets/members.svg" },
  { value: "tagged", label: "taggé", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "paroles", icon: "/assets/reply.svg" },
  { value: "members", label: "membres", icon: "/assets/members.svg" },
  { value: "requests", label: "demandes", icon: "/assets/request.svg" },
];

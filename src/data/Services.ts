interface Service {
  title: string;
  resume: string;
  images?: string[];
}

export const Services: Service[] = [
  {
    title: "Cartographie",
    resume:
      "La cartographie est un élément essentiel pour tout roman de fantasy ou de science-fiction. Je propose de donner vie à vos mondes imaginaires à travers des cartes détaillées et personnalisées. Que ce soit pour un royaume médiéval-fantastique, ou un archipel mystérieux, je m'adapte à votre univers et votre style.",
    images: [
      "/assets/services/maps/maps_one.webp",
      "/assets/services/maps/maps_two.webp",
    ],
  },
  {
    title: "Beta Lecture",
    resume:
      "En tant qu'écrivaine moi-même, je comprends l'importance cruciale d'avoir un regard extérieur constructif sur son manuscrit. Je propose un service de beta lecture approfondi qui analyse aussi bien la structure globale que les détails de votre histoire, avec un focus particulier sur la cohérence narrative et le développement des personnages.",
  },
  {
    title: "Entête de chapitres",
    resume:
      "Je propose des entêtes de chapitres pour les romans de fantasy et de science-fiction. Ces entêtes sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins.",
    images: [
      "/assets/services/header/header_one.webp",
      "/assets/services/header/header_two.webp",
      "/assets/services/header/header_three.webp",
      "/assets/services/header/header_four.webp",
      "/assets/services/header/header_five.webp",
      "/assets/services/header/header_six.webp",
    ],
  },
  {
    title: "Jaspages",
    resume:
      "J'ai créé des jaspages pour les romans de fantasy et de science-fiction. Ces jaspages sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins.",
    images: [
      "/assets/services/jaspages/jaspages_one.webp",
      "/assets/services/jaspages/jaspages_two.webp",
      "/assets/services/jaspages/jaspages_three.webp",
    ],
  },
];

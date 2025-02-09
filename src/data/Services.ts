interface Service {
  title: string;
  resume: string;
  images?: string[];
}

export const Services: Service[] = [
  {
    title: "Cartographie - 80/100€",
    resume:
      "La cartographie est un élément essentiel pour tout roman de fantasy ou de science-fiction. Je propose de donner vie à vos mondes imaginaires à travers des cartes détaillées et personnalisées. Que ce soit pour un royaume médiéval-fantastique, ou un archipel mystérieux, je m'adapte à votre univers et votre style. N'hésitez pas à me contacter pour obtenir un devis.",
    images: [
      "/assets/services/maps/maps_one.webp",
      "/assets/services/maps/maps_two.webp",
    ],
  },
  {
    title: "Beta Lecture - 0,003€/mot",
    resume:
      "En tant qu'écrivaine moi-même, je comprends l'importance cruciale d'avoir un regard extérieur constructif sur son manuscrit. Je propose un service de beta lecture approfondi qui analyse aussi bien la structure globale que les détails de votre histoire, avec un focus particulier sur la cohérence narrative et le développement des personnages.",
  },
  {
    title: "Entête de chapitres - 10€/40€",
    resume:
      "Je propose des entêtes de chapitres pour les romans de fantasy et de science-fiction. Ces entêtes sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    images: [
      "/assets/services/headers/header_one.webp",
      "/assets/services/headers/header_two.webp",
      "/assets/services/headers/header_three.webp",
      "/assets/services/headers/header_four.webp",
      "/assets/services/headers/header_five.webp",
      "/assets/services/headers/header_six.webp",
    ],
  },
  {
    title: "Jaspages - 80€/120€",
    resume:
      "J'ai créé des jaspages pour les romans de fantasy et de science-fiction. Ces jaspages sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    images: [
      "/assets/services/jaspages/jaspage_one.webp",
      "/assets/services/jaspages/jaspage_two.webp",
      "/assets/services/jaspages/jaspage_three.webp",
    ],
  },
  {
    title: "Illustration - sous devis",
    resume:
      "Je propose des illustrations pour les romans de fantasy et de science-fiction. Ces illustrations sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins.",
    images: [
      "/assets/services/illustrations/illustration_one.webp",
      "/assets/services/illustrations/illustration_two.webp",
      "/assets/services/illustrations/illustration_three.webp",
      "/assets/services/illustrations/illustration_four.webp",
    ],
  },
];

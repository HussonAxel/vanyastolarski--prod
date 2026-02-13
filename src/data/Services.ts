interface ServiceAsset {
  url: string;
  type: "image" | "file";
  filename?: string;
  fileType?: string;
}

interface Service {
  title: string;
  price?: string;
  resume: string;
  assets?: ServiceAsset[];
  cardsPerView?: number;
}

export const Services: Service[] = [
  {
    title: "Couverture",
    price: "X",
    resume:
      "Je propose une couverture pour les romans de fantasy et de science-fiction. Ces couvertures sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 3,
    assets: [
      {
        url: "/assets/services/couvertures/cover_1.webp",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_2.webp",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_3.webp",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_5.png",
        type: "image",
      },
      {
        url: "/assets/services/pageDeGarde/pdg1.png",
        type: "image",
      },
    ],
  },

  {
    title: "Premades",
    price: "X",
    resume:
      "Je propose des premades pour les romans de fantasy et de science-fiction. Ces premades sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 3,
    assets: [
      {
        url: "/assets/services/premades/premade.png",
        type: "image",
      },
      {
        url: "/assets/services/premades/premade2.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Jaspages",
    price: "80€/120€",
    resume:
      "J'ai créé des jaspages pour les romans de fantasy et de science-fiction. Ces jaspages sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 4,
    assets: [
      {
        url: "/assets/services/jaspages/jaspage_four.webp",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_five.webp",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_six.webp",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_seven.webp",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_eight.webp",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_nine.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Pages de Gardes",
    price: "Sous Devis",
    resume:
      "J'ai créé des pages de gardes pour les romans de fantasy et de science-fiction. Ces pages de gardes sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 2,
    assets: [
      {
        url: "/assets/services/pageDeGarde/pdg2.png",
        type: "image",
      },
      {
        url: "/assets/services/pageDeGarde/pdg3.png",
        type: "image",
      },
    ],
  },
  {
    title: "Entête de chapitres",
    price: "A partir de 20€",
    resume:
      "Je propose des entêtes de chapitres pour les romans de fantasy et de science-fiction. Ces entêtes sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 6,
    assets: [
      {
        url: "/assets/services/headers/header_seven.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_eight.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_nine.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_ten.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_eleven.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_twelve.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_thirteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_fourteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_fifteen.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Cartographie",
    price: "1 page 200€ / 2 pages 400€",
    resume:
      "La cartographie est un élément essentiel pour tout roman de fantasy ou de science-fiction. Je propose de donner vie à vos mondes imaginaires à travers des cartes détaillées et personnalisées, à partir de 200€ pour une page, et 400€ pour deux. Que ce soit pour un royaume médiéval-fantastique, ou un archipel mystérieux, je m'adapte à votre univers et votre style. N'hésitez pas à me contacter pour obtenir un devis. ",
    cardsPerView: 5,
    assets: [
      {
        url: "/assets/services/maps/maps_one.webp",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_two.webp",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_three.webp",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_six.webp",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_seven.webp",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_eight.png",
        type: "image",
      },
    ],
  },

  {
    title: "Illustration",
    price: "Sous devis",
    resume:
      "Je propose des illustrations pour les romans de fantasy et de science-fiction. Ces illustrations sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins.",
    cardsPerView: 5,
    assets: [
      {
        url: "/assets/services/illustrations/illustration_five.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_six.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_seven.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_eight.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_nine.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_ten.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_eleven.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_twelve.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_thirteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_fourteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_fifteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_sixteen.webp",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_seventeen.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_eighteen.png",
        type: "image",
      },
    ],
  },
];

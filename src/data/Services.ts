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
        url: "/assets/services/couvertures/cover_1.png",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_2.png",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_3.png",
        type: "image",
      },
      {
        url: "/assets/services/couvertures/cover_4.png",
        type: "image",
      },
    ],
  },
  {
    title: "Jaspages",
    price: "80€/120€",
    resume:
      "J'ai créé des jaspages pour les romans de fantasy et de science-fiction. Ces jaspages sont conçus pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins. N'hésitez pas à me contacter pour obtenir un devis.",
    cardsPerView: 6,
    assets: [
      {
        url: "/assets/services/jaspages/jaspage_four.png",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_five.png",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_six.png",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_seven.png",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_eight.png",
        type: "image",
      },
      {
        url: "/assets/services/jaspages/jaspage_nine.png",
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
        url: "/assets/services/headers/header_seven.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_eight.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_nine.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_ten.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_eleven.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_twelve.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_thirteen.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_fourteen.png",
        type: "image",
      },
      {
        url: "/assets/services/headers/header_fifteen.png",
        type: "image",
      },
    ],
  },
  {
    title: "Cartographie",
    price: "1 page 200€ / 2 pages 400€",
    resume:
      "La cartographie est un élément essentiel pour tout roman de fantasy ou de science-fiction. Je propose de donner vie à vos mondes imaginaires à travers des cartes détaillées et personnalisées, à partir de 200€ pour une page, et 400€ pour deux. Que ce soit pour un royaume médiéval-fantastique, ou un archipel mystérieux, je m'adapte à votre univers et votre style. N'hésitez pas à me contacter pour obtenir un devis. ",
    cardsPerView: 4,
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
        url: "/assets/services/maps/maps_three.png",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_six.png",
        type: "image",
      },
      {
        url: "/assets/services/maps/maps_seven.png",
        type: "image",
      },
    ],
  },

  {
    title: "Illustration",
    price: "Sous devis",
    resume:
      "Je propose des illustrations pour les romans de fantasy et de science-fiction. Ces illustrations sont conçues pour donner une impression de luxe et de qualité à votre livre. Ils sont disponibles en différentes tailles et formats, et peuvent être personnalisés selon vos besoins.",
    cardsPerView: 6,
    assets: [
      {
        url: "/assets/services/illustrations/illustration_five.jpg",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_six.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_seven.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_eight.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_nine.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_ten.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_eleven.jpg",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_twelve.jpg",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_thirteen.jpg",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_fourteen.jpg",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_fifteen.png",
        type: "image",
      },
      {
        url: "/assets/services/illustrations/illustration_sixteen.jpg",
        type: "image",
      },
    ],
  },
];

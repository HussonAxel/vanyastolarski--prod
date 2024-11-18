// data/Reviews.ts

export interface ReviewData {
  id: string;
  bookCover: string;
  bookTitle: string;
  bookSaga?: string;
  synopsis: string;
  context: string;
  universeReview: {
    content: string;
    rating: number;
  };
  storyReview: {
    content: string;
    rating: number;
  };
  charactersReview: {
    content: string;
    rating: number;
  };
  globalRating: number;
}

export const reviewsData: ReviewData[] = [
  {
    id: "1",
    bookCover: "../src/assets/covers/12_divins_couverture.webp",
    bookSaga: "LES DOUZE DIVINS",
    bookTitle: "Les Anges Mortels",
    synopsis:
      "Les portes de l'enfer se sont ouvertes et ont déversé sur le monde le Chaos, grouillant de garmes, harpies et démons. Aspen vit à Saint-Pétersbourg, l'une des ultimes villes habitables, et travaille pour le Violetta, la dernière mafia russe encore existante...",
    context:
      "Mêlant post-apocalypse et fantastique, les Douze Divins est un récit sur un peuple réprimé et manipulé pour une raison qui reste à découvrir.",
    universeReview: {
      content:
        "Un univers post-apocalyptique riche et cohérent, mêlant habilement éléments de fantasy et de science-fiction. L'atmosphère oppressante de Saint-Pétersbourg est particulièrement bien rendue, créant un cadre idéal pour cette histoire sombre.",
      rating: 4,
    },
    storyReview: {
      content:
        "L'intrigue est bien menée, avec un rythme soutenu et des rebondissements qui maintiennent l'intérêt du lecteur. La relation entre les personnages principaux est particulièrement bien développée, créant une tension narrative efficace.",
      rating: 5,
    },
    charactersReview: {
      content:
        "Des personnages complexes et bien développés, avec des motivations claires et des conflits internes intéressants. Leur évolution au fil du récit est crédible et engageante.",
      rating: 4,
    },
    globalRating: 4,
  },
  // Add more reviews as needed
];

export interface ReviewData {
  id: string;
  bookCover: string;
  bookTitle: string;
  bookSynopsis: string;
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

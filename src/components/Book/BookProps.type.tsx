export interface BookProps {
  BookSaga?: string;
  BookTitle: string;
  BookResume: string;
  isbn: string;
  BookCover: string;
  BookCoverAlt?: string;
  bookID: string;
  bookSlug: string;
  BookPages: number;
  firstChapterLink?: string;
  BookTags?: string[];
  BookVolume?: number;
}

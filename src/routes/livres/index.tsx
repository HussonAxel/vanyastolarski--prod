import { createFileRoute } from "@tanstack/react-router";
import ColoredSection from "../../components/ColoredSection";
import BooksData from "@data/data.json";
import Book from "@components/Book/Book";

export const Route = createFileRoute("/livres/")({
  component: () => <LivresComponents />,
});

const LivresComponents = () => {
  return (
    <>
      <ColoredSection bgColor="bg-white">
        <section className="pt-12">
          {BooksData.books.map((book) => (
            <Book
              key={book.id}
              BookSaga={book.saga}
              BookTitle={book.title}
              BookResume={book.synopsis}
              isbn={book.ISBN}
              BookCover={book.cover}
              BookCoverAlt={`${book.title} cover`}
              bookID={book.id}
              bookSlug={book.slug}
              BookPages={book.pages}
              firstChapterLink={book.firstChapterLink}
              BookTags={book.tags}
              BookVolume={book.volume}
            />
          ))}
        </section>
      </ColoredSection>
    </>
  );
};

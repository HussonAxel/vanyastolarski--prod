import { createLazyFileRoute } from "@tanstack/react-router";
import QuoteTemplate from "@components/QuoteTemplate/QuoteTemplate";
import ColoredSection from "../../components/ColoredSection";
import BooksQuotes from "@data/BooksQuotes.json";

export const Route = createLazyFileRoute("/reviews/")({
  component: () => <LivresComponents />,
});

const LivresComponents = () => {
  return (
    <>
      <ColoredSection bgColor="bg-white">
        <section className="pt-12">
          {BooksQuotes.map((book, index) => (
            <QuoteTemplate
              key={index}
              BookSaga={book.saga}
              BookTitle={book.title}
              BookResume={book.resume}
              DateQuote={book.date}
              isbn={book.isbn}
              BookCover={book.cover}
              BookCoverAlt={book.coverAlt}
              bookID={book.id}
              BookDate={book.date}
            />
          ))}
        </section>
      </ColoredSection>
    </>
  );
};

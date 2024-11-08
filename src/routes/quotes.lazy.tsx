import { createLazyFileRoute } from "@tanstack/react-router";
import QuoteTemplate from "@components/QuoteTemplate/QuoteTemplate";
import ColoredSection from "../components/ColoredSection";
import BooksQuotes from "@data/BooksQuotes.json"

export const Route = createLazyFileRoute("/quotes")({
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
              BookQuote={book.title}
              DateQuote={book.date}
              SentenceQuote={book.sentence}
              AuthorSentence={book.authorSentence}
              BookCover={book.cover}
              BookCoverAlt={book.coverAlt}
            />
          ))}
        </section>
      </ColoredSection>
    </>
  );
};

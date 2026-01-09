import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import QuoteTemplate from "@components/QuoteTemplate/QuoteTemplate";
import ColoredSection from "../../components/ColoredSection";
import BooksQuotes from "@data/BooksQuotes.json";

export const Route = createFileRoute("/reviews/")({
  component: () => <LivresComponents />,
});

const LivresComponents = () => {
  return (
    <>
      <Helmet>
        <title>Chroniques Littéraires | Vanya Stolarski</title>
        <meta
          name="description"
          content="Découvrez les chroniques littéraires de Vanya Stolarski. Critiques détaillées, analyses et avis sur des romans contemporains."
        />
        <meta
          property="og:title"
          content="Chroniques et Critiques | Vanya Stolarski"
        />
        <meta
          property="og:description"
          content="Explorez les critiques littéraires et analyses de romans par Vanya Stolarski. Découvrez ses impressions et recommandations de lecture."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.vanyastolarski.fr/images/reviews-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vanyastolarski.fr/reviews"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Critiques Littéraires | Vanya Stolarski"
        />
        <meta
          name="twitter:description"
          content="Chroniques, analyses et critiques de romans contemporains par Vanya Stolarski."
        />
        <meta
          name="keywords"
          content="chroniques littéraires, critiques livres, avis lecture, Vanya Stolarski, analyses romans"
        />
        <link rel="canonical" href="https://www.vanyastolarski.fr/reviews" />
      </Helmet>

      <ColoredSection bgColor="bg-white">
        <section className="pt-12">
          {BooksQuotes.map((book, index) => (
            <QuoteTemplate
              key={index}
              BookSaga={(book as any).saga}
              BookResume={book.resume}
              DateQuote={book.date}
              isbn={book.isbn}
              BookCover={book.cover}
              BookCoverAlt={book.coverAlt}
              bookID={book.id}
              bookSlug={book.slug}
              BookDate={book.date}
              linktoReview={book.linktoReview}
            />
          ))}
        </section>
      </ColoredSection>
    </>
  );
};

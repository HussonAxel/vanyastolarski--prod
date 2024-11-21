import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import ColoredSection from "@components/ColoredSection";
import BooksData from "@data/data.json";
import Book from "@components/Book/Book";

export const Route = createFileRoute("/")({
  component: () => <LivresComponents />,
});

const LivresComponents = () => {
  return (
    <>
      <Helmet>
        <title>Livres | Vanya Stolarski</title>
        <meta
          name="description"
          content="Découvrez tous les livres de Vanya Stolarski. Romans contemporains explorant des thèmes profonds et touchants."
        />
        <meta property="og:title" content="Bibliographie | Vanya Stolarski" />
        <meta
          property="og:description"
          content="Explorez la collection complète des œuvres de Vanya Stolarski, auteure de romans contemporains."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.vanyastolarski.fr/assets/covers/FP_Cover.webp"
        />
        <meta
          property="og:url"
          content="https://www.vanyastolarski.fr/livres"
        />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Les Livres de Vanya Stolarski" />
        <meta
          name="twitter:description"
          content="Découvrez la bibliographie complète de Vanya Stolarski."
        />
        <meta
          name="keywords"
          content="Vanya Stolarski, livres, romans, bibliographie, œuvres littéraires"
        />
        <link rel="canonical" href="https://www.vanyastolarski.fr/livres" />
      </Helmet>
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
              BookPages={book.pages}
              firstChapterLink={book.firstChapterLink}
            />
          ))}
        </section>
      </ColoredSection>
    </>
  );
};

import { createFileRoute } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import BookInfos from "@components/BookInfos/BookInfos";
import CharacterPanel from "@components/CharacterPanel/CharacterPanel";
import ColoredSection from "@components/ColoredSection";
import Pagination from "@components/ui/Pagination/Pagination";
import data from "../../data/data.json";
import OtherBooks from "@components/OtherBooks/OtherBooks";

const LivreComponents = () => {
  const { slug } = useParams({ from: "/livres/$slug" });
  const book = data.books.find((book) => book.slug === slug);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 3;

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <h1 className="text-xl md:text-2xl">Book not found</h1>
      </div>
    );
  }

  const getAssetPath = (path: string) => `../${path}`;
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = book.characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const totalPages = Math.ceil(book.characters.length / charactersPerPage);
  const displayedSagaTitle = (book as any).saga || book.title;
  const displayedBookTitle = (book as any).saga ? book.title : undefined;
  const fullTitle = (book as any).saga
    ? `${(book as any).saga} : ${book.title}`
    : book.title;

  return (
    <main className="w-full">
      <Helmet>
        <title>{fullTitle} | Vanya Stolarski</title>
        <meta name="description" content={book.synopsis} />
        <meta property="og:title" content={`${fullTitle} | Vanya Stolarski`} />
        <meta property="og:description" content={book.synopsis} />
        <meta property="og:type" content="book" />
        <meta
          property="og:image"
          content={`https://www.vanyastolarski.fr${book.cover}`}
        />
        <meta
          property="og:url"
          content={`https://www.vanyastolarski.fr/livres/${slug}`}
        />
        <meta property="book:isbn" content={book.ISBN} />
        <meta property="book:author" content="Vanya Stolarski" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={book.synopsis} />
        <meta
          name="keywords"
          content={`Vanya Stolarski, ${book.title}, ${(book as any).saga || ""}, roman contemporain, littérature française`}
        />
        <link
          rel="canonical"
          href={`https://www.vanyastolarski.fr/livres/${slug}`}
        />
      </Helmet>

      <ColoredSection bgColor="bg-white">
        <BookInfos
          SynopsisSectionContent="Synopsis"
          Synopsis={book.synopsis}
          ContexteSectionContent="Contexte"
          Contexte={book.contexte}
          picture={getAssetPath(book.cover)}
          amazonLink={book.amazonLink}
          sumpUpLink={book.sumpUpLink}
          BookSaga={displayedSagaTitle}
          BookTitle={displayedBookTitle || ""}
          firstChapterLink={book.firstChapterLink}
        />
      </ColoredSection>

      <ColoredSection bgColor="bg-green">
        <h2 className="font-Large text-3xl md:text-5xl text-white pb-4 text-center relative underline">
          Personnages
        </h2>
        <div className="space-y-8 w-full lg:w-10/12 m-auto px-4">
          {currentCharacters.map((character, index) => (
            <CharacterPanel
              key={`character-${character.prenom}-${index}`}
              name={`${character.prenom} ${character.nom}`}
              resume={character.description}
              picture={getAssetPath(character.picture)}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-8 pb-4"
            isGreen={false}
          />
        )}
      </ColoredSection>

      <ColoredSection bgColor="bg-white">
        <OtherBooks />
      </ColoredSection>
    </main>
  );
};

export const Route = createFileRoute("/livres/$slug")({
  component: LivreComponents,
});

import { createLazyFileRoute } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";
import BookInfos from "@components/BookInfos/BookInfos";
import CharacterPanel from "@components/CharacterPanel/CharacterPanel";
import ColoredSection from "@components/ColoredSection";
import Pagination from "@components/ui/Pagination/Pagination";
import data from "../../data/data.json";
import OtherBooks from "@components/OtherBooks/OtherBooks";
// import BookData from "@components/BookData/BookData";


const LivreComponents = () => {
  const { id } = useParams({ from: "/livres/$id" });
  const book = data.books.find((book) => book.id === id);
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
  const displayedSagaTitle = book.saga || book.title;
  const displayedBookTitle = book.saga ? book.title : undefined;

  return (
    <main className="w-full">
      <ColoredSection bgColor="bg-white">
        <BookInfos
          SynopsisSectionContent="Synopsis"
          Synopsis={book.synopsis}
          ContexteSectionContent="Contexte"
          Contexte={book.contexte}
          picture={getAssetPath(book.cover)}
          BookSaga={displayedSagaTitle}
          BookTitle={displayedBookTitle || ""}
        />
      </ColoredSection>

      {/* <ColoredSection bgColor="bg-green">
        <BookData BookTitle={book.title} />
      </ColoredSection> */}

      <ColoredSection bgColor="bg-white">
        <h2 className="font-WorkSans text-3xl md:text-5xl text-green pb-4 text-center relative underline">
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
          />
        )}
      </ColoredSection>

      <ColoredSection bgColor="bg-green">
        <OtherBooks />
      </ColoredSection>
    </main>
  );
};

export const Route = createLazyFileRoute("/livres/$id")({
  component: LivreComponents,
});

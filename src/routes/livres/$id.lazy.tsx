import { createLazyFileRoute } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import BookInfos from "@components/BookInfos/BookInfos";
import CharacterPanel from "@components/CharacterPanel/CharacterPanel";
import ColoredSection from "@components/ColoredSection.tsx";

import data from "../../data/data.json";

const LivreComponents = () => {
  const { id } = useParams({ from: "/livres/$id" });
  const book = data.books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <ColoredSection bgColor="bg-white">
        <BookInfos
          SynopsisSectionContent="Synopsis"
          Synopsis={book.synopsis}
          ContexteSectionContent="Contexte"
          Contexte={book.contexte}
          picture={`../${book.cover}`}
        />
      </ColoredSection>
      <ColoredSection bgColor="bg-green">
        <h2 className="font-myfont text-6xl text-white pb-4">Personnages</h2>
        {book.characters.map((character, index) => (
          <CharacterPanel
            key={index}
            name={`${character.prenom} ${character.nom}`}
            resume={character.description}
            picture={`../${character.picture}`}
          />
        ))}
      </ColoredSection>
    </>
  );
};

export const Route = createLazyFileRoute("/livres/$id")({
  component: LivreComponents,
});

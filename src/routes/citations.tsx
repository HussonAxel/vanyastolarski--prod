import { createFileRoute } from '@tanstack/react-router'
import CitationModel from '@components/CitationModel/CitationModel'
import { Citations } from '@data/Citations'
import ColoredSection from '@components/ColoredSection';
import SectionTitle from '@components/ui/SectionTitle/SectionTitle';


const CitationIndex = () => {
  console.log(Citations);
  return (
    <>
      <ColoredSection bgColor={"bg-white"}>
      <SectionTitle title="Mes citations" isGreen={false} />
        {Citations.map((citation) => (
          <CitationModel
            key={citation.quoteNumber}
            quoteNumber={citation.quoteNumber}
            CreatedAt={citation.CreatedAt}
            Quote={citation.Quote}
            AuthorOfQuote={citation.AuthorOfQuote}
            Thoughts={citation.Thoughts}
          />
        ))}
      </ColoredSection>
    </>
  );
};

export const Route = createFileRoute("/citations")({
  component: () => <CitationIndex />,
});
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import CitationModel from "@components/CitationModel/CitationModel";
import { Citations } from "@data/Citations";
import ColoredSection from "@components/ColoredSection";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const CitationIndex = () => {
  return (
    <>
      <Helmet>
        <title>Citations Inspirantes | Vanya Stolarski</title>
        <meta
          name="description"
          content="Découvrez une collection de citations littéraires choisies et commentées par Vanya Stolarski. Réflexions et pensées sur la littérature."
        />
        <meta
          property="og:title"
          content="Citations et Réflexions | Vanya Stolarski"
        />
        <meta
          property="og:description"
          content="Collection de citations inspirantes et leurs analyses par Vanya Stolarski. Découvrez des pensées qui marquent et font réfléchir."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.vanyastolarski.fr/images/citations-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vanyastolarski.fr/citations"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Citations Littéraires | Vanya Stolarski"
        />
        <meta
          name="twitter:description"
          content="Explorez une sélection de citations inspirantes et leurs analyses par Vanya Stolarski."
        />
        <meta
          name="keywords"
          content="citations littéraires, réflexions, pensées, Vanya Stolarski, littérature"
        />
        <link rel="canonical" href="https://www.vanyastolarski.fr/citations" />
      </Helmet>

      <ColoredSection bgColor={"bg-white"}>
        <SectionTitle title="Mes citations" isGreen={false} />
        {Citations.map((citation) => (
          <CitationModel
            key={citation.quoteNumber}
            quoteNumber={citation.quoteNumber}
            CreatedAt={citation.CreatedAt}
            Quote={citation.Quote}
            AuthorOfQuote={citation.AuthorOfQuote}
          />
        ))}
      </ColoredSection>
    </>
  );
};

export const Route = createFileRoute("/citations")({
  component: () => <CitationIndex />,
});

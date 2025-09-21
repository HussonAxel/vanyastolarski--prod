import { createFileRoute } from "@tanstack/react-router";
import LatestRelease from "@components/LatestRelease/LatestRelease.tsx";
import BookResume from "@components/BookResume/BookResume";
import LatestReading from "@components/LatestReading/LatestReading";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

import ColoredSection from "@components/ColoredSection.tsx";
import data from "@data/data.json";

export const Route = createFileRoute("/")({
  component: () => <IndexComponent />,
});

const IndexComponent = () => {
  return (
    <>
      <Helmet>
        <title>Vanya Stolarski | Auteure de romans</title>
        <meta
          name="description"
          content="Découvrez l'univers littéraire de Vanya Stolarski, auteure de romans contemporains. Explorez ses œuvres, son dernier livre 'Fous Papillons' et ses actualités."
        />
        <meta property="og:title" content="Vanya Stolarski | Romancière" />
        <meta
          property="og:description"
          content="Plongez dans l'univers de Vanya Stolarski, auteure de romans qui explore le post-apocalyptique, la romance ainsi que l'histoire. Découvrez ses œuvres et son actualité littéraire."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="[URL-photo-auteur]" />
        <meta property="og:url" content="[URL-site]" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vanya Stolarski | Écrivaine" />
        <meta
          name="twitter:description"
          content="Romans, actualités et rencontres littéraires de Vanya Stolarski, auteure contemporaine."
        />

        <meta
          name="keywords"
          content="Vanya Stolarski, roman contemporain, littérature française, Fous Papillons, auteure, écrivaine, romans"
        />
        <meta name="author" content="Vanya Stolarski" />
        <link rel="canonical" href="https://www.vanyastolarski.fr/" />
      </Helmet>
      <div></div>
      <ColoredSection bgColor="bg-white">
        <LatestRelease
          LatestReleaseName="Coeur De Renard"
          LatestReleaseSynopsis={data.books[0].synopsis}
          latestReleasePageUrl="https://fr.ulule.com/coeur-de-renard---thriller-psychologique/"
          latestReleasePictureUrl={""}
        />
      </ColoredSection>
      <ColoredSection bgColor="bg-green">
        <BookResume />
      </ColoredSection>
      <ColoredSection bgColor="bg-white">
        <LatestReading />
      </ColoredSection>
      <ColoredSection bgColor="bg-green">
        <SectionTitle title="Ma newsletter" isGreen={true} />
        <div className="flex justify-center w-full max-w-4xl mx-auto py-8">
          <iframe
            src="https://vanyastolarski.substack.com/embed"
            width="100%"
            height="320"
            className="border-0 rounded-lg shadow-md"
            title="Vanya Stolarski's Newsletter"
            loading="lazy"
          ></iframe>
        </div>
      </ColoredSection>
    </>
  );
};

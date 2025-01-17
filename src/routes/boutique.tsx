import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import BoutiquePics from "@components/BoutiquePics/BoutiquePics";
import ColoredSection from "@components/ColoredSection";

const BoutiqueComponents = () => {
  return (
    <>
      <Helmet>
        <title>Boutique | Vanya Stolarski</title>
        <meta
          name="description"
          content="Découvrez la boutique de Vanya Stolarski. Livres, illustrations et autres produits."
        />
        <meta property="og:title" content="Boutique | Vanya Stolarski" />
        <meta
          property="og:description"
          content="Découvrez la boutique de Vanya Stolarski. Livres, illustrations et autres produits."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.vanyastolarski.fr/images/gallery-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vanyastolarski.fr/boutique"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boutique | Vanya Stolarski" />
        <meta
          name="twitter:description"
          content="Découvrez la boutique de Vanya Stolarski. Livres, illustrations et autres produits."
        />
        <meta
          name="keywords"
          content="boutique, Vanya Stolarski, livres, illustrations, autres produits"
        />
        <link rel="canonical" href="https://www.vanyastolarski.fr/boutique" />
      </Helmet>

      <ColoredSection bgColor="bg-white">
        <BoutiquePics />
      </ColoredSection>
    </>
  );
};

export const Route = createFileRoute("/boutique")({
  component: () => <BoutiqueComponents />,
});

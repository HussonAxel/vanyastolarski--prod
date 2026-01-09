import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import GalleryPics from "@components/GalleryPics/GalleryPics";
import ColoredSection from "@components/ColoredSection";

const GalerieComponents = () => {
  return (
    <>
      <Helmet>
        <title>Galerie Photos | Vanya Stolarski</title>
        <meta
          name="description"
          content="Découvrez la galerie photos de Vanya Stolarski. Images, moments et souvenirs partagés avec ses lecteurs."
        />
        <meta property="og:title" content="Galerie | Vanya Stolarski" />
        <meta
          property="og:description"
          content="Explorez la galerie photos de Vanya Stolarski et plongez dans son univers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.vanyastolarski.fr/images/gallery-banner.jpg"
        />
        <meta
          property="og:url"
          content="https://www.vanyastolarski.fr/galerie"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galerie Photos | Vanya Stolarski" />
        <meta
          name="twitter:description"
          content="Une collection de photos et moments partagés par Vanya Stolarski."
        />
        <meta
          name="keywords"
          content="galerie photos, Vanya Stolarski, images, moments, souvenirs"
        />
        <link rel="canonical" href="https://www.vanyastolarski.fr/galerie" />
      </Helmet>

      <ColoredSection bgColor="bg-white" className="py-8">
        <GalleryPics />
      </ColoredSection>
    </>
  );
};

export const Route = createFileRoute("/galerie")({
  component: () => <GalerieComponents />,
});

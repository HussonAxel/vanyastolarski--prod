import { createLazyFileRoute } from "@tanstack/react-router";
import GalleryPics from "@components/GalleryPics/GalleryPics";
import ColoredSection from "@components/ColoredSection";

const GalerieComponents = () => {
  return (
    <ColoredSection bgColor="bg-white">
      <GalleryPics />;
    </ColoredSection>
  );
};
export const Route = createLazyFileRoute("/galerie")({
  component: () => <GalerieComponents />,
});

import { createFileRoute } from "@tanstack/react-router";
import ServicesList from "@components/ServicesList/ServicesList";
import ColoredSection from "@components/ColoredSection";

export const Route = createFileRoute("/portfolio")({
  component: portfolioLayout,
});

function portfolioLayout() {
  return (
    <ColoredSection bgColor="bg-white">
      <ServicesList />
    </ColoredSection>
  );
}

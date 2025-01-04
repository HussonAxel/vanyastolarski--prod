import { createFileRoute } from "@tanstack/react-router";
import ServicesList from "@components/ServicesList/ServicesList";
import ColoredSection from "@components/ColoredSection";

export const Route = createFileRoute("/services")({
  component: servicesLayout,
});

function servicesLayout() {
  return (
    <ColoredSection bgColor="bg-white">
      <ServicesList />
    </ColoredSection>
  );
}

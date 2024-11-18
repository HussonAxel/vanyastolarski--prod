import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/livres")({
  component: LivresLayout,
});

function LivresLayout() {
  return <Outlet />;
}

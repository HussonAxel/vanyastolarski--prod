import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import ColoredSection from "../components/ColoredSection";
import "../index.css";

import Header from "@components/Header/Header";
export const Route = createRootRoute({
  component: () => (
    <>
      <ColoredSection bgColor="bg-green">
        <Header />
      </ColoredSection>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

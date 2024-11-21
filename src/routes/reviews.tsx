import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  component: reviewsLayout,
});

function reviewsLayout() {
  return <Outlet />
}
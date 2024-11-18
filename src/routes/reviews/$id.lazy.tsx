import { createLazyFileRoute } from "@tanstack/react-router";
import ReviewPage from "@components/Review/Review";

export const Route = createLazyFileRoute("/reviews/$id")({
  component: ReviewPage,
});

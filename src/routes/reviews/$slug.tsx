import { createFileRoute } from "@tanstack/react-router";
import ReviewPage from "@components/Review/Review";

export const Route = createFileRoute("/reviews/$slug")({
  component: ReviewPage,
});

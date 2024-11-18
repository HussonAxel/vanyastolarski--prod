import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/reviews')({
  component: reviewsLayout,
})

function reviewsLayout() {
  return <Outlet />
}
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog')({
  component: () => <div></div>
})
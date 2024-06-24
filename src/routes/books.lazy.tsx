import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/books')({
  component: () => <div>Hello /books!</div>
})
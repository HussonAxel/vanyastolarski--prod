/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ReviewsImport } from './routes/reviews'
import { Route as LivresImport } from './routes/livres'
import { Route as GalerieImport } from './routes/galerie'
import { Route as CitationsImport } from './routes/citations'
import { Route as IndexImport } from './routes/index'
import { Route as ReviewsIndexImport } from './routes/reviews/index'
import { Route as LivresIndexImport } from './routes/livres/index'
import { Route as ReviewsIdImport } from './routes/reviews/$id'
import { Route as LivresIdImport } from './routes/livres/$id'

// Create/Update Routes

const ReviewsRoute = ReviewsImport.update({
  path: '/reviews',
  getParentRoute: () => rootRoute,
} as any)

const LivresRoute = LivresImport.update({
  path: '/livres',
  getParentRoute: () => rootRoute,
} as any)

const GalerieRoute = GalerieImport.update({
  path: '/galerie',
  getParentRoute: () => rootRoute,
} as any)

const CitationsRoute = CitationsImport.update({
  path: '/citations',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReviewsIndexRoute = ReviewsIndexImport.update({
  path: '/',
  getParentRoute: () => ReviewsRoute,
} as any)

const LivresIndexRoute = LivresIndexImport.update({
  path: '/',
  getParentRoute: () => LivresRoute,
} as any)

const ReviewsIdRoute = ReviewsIdImport.update({
  path: '/$id',
  getParentRoute: () => ReviewsRoute,
} as any)

const LivresIdRoute = LivresIdImport.update({
  path: '/$id',
  getParentRoute: () => LivresRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/citations': {
      id: '/citations'
      path: '/citations'
      fullPath: '/citations'
      preLoaderRoute: typeof CitationsImport
      parentRoute: typeof rootRoute
    }
    '/galerie': {
      id: '/galerie'
      path: '/galerie'
      fullPath: '/galerie'
      preLoaderRoute: typeof GalerieImport
      parentRoute: typeof rootRoute
    }
    '/livres': {
      id: '/livres'
      path: '/livres'
      fullPath: '/livres'
      preLoaderRoute: typeof LivresImport
      parentRoute: typeof rootRoute
    }
    '/reviews': {
      id: '/reviews'
      path: '/reviews'
      fullPath: '/reviews'
      preLoaderRoute: typeof ReviewsImport
      parentRoute: typeof rootRoute
    }
    '/livres/$id': {
      id: '/livres/$id'
      path: '/$id'
      fullPath: '/livres/$id'
      preLoaderRoute: typeof LivresIdImport
      parentRoute: typeof LivresImport
    }
    '/reviews/$id': {
      id: '/reviews/$id'
      path: '/$id'
      fullPath: '/reviews/$id'
      preLoaderRoute: typeof ReviewsIdImport
      parentRoute: typeof ReviewsImport
    }
    '/livres/': {
      id: '/livres/'
      path: '/'
      fullPath: '/livres/'
      preLoaderRoute: typeof LivresIndexImport
      parentRoute: typeof LivresImport
    }
    '/reviews/': {
      id: '/reviews/'
      path: '/'
      fullPath: '/reviews/'
      preLoaderRoute: typeof ReviewsIndexImport
      parentRoute: typeof ReviewsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  CitationsRoute,
  GalerieRoute,
  LivresRoute: LivresRoute.addChildren({ LivresIdRoute, LivresIndexRoute }),
  ReviewsRoute: ReviewsRoute.addChildren({ ReviewsIdRoute, ReviewsIndexRoute }),
})

/* prettier-ignore-end */

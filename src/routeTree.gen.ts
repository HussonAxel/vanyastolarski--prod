/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ServicesImport } from './routes/services'
import { Route as ReviewsImport } from './routes/reviews'
import { Route as LivresImport } from './routes/livres'
import { Route as GalerieImport } from './routes/galerie'
import { Route as CitationsImport } from './routes/citations'
import { Route as BoutiqueImport } from './routes/boutique'
import { Route as IndexImport } from './routes/index'
import { Route as ReviewsIndexImport } from './routes/reviews/index'
import { Route as LivresIndexImport } from './routes/livres/index'
import { Route as ReviewsSlugImport } from './routes/reviews/$slug'
import { Route as LivresSlugImport } from './routes/livres/$slug'

// Create/Update Routes

const ServicesRoute = ServicesImport.update({
  path: '/services',
  getParentRoute: () => rootRoute,
} as any)

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

const BoutiqueRoute = BoutiqueImport.update({
  path: '/boutique',
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

const ReviewsSlugRoute = ReviewsSlugImport.update({
  path: '/$slug',
  getParentRoute: () => ReviewsRoute,
} as any)

const LivresSlugRoute = LivresSlugImport.update({
  path: '/$slug',
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
    '/boutique': {
      id: '/boutique'
      path: '/boutique'
      fullPath: '/boutique'
      preLoaderRoute: typeof BoutiqueImport
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
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesImport
      parentRoute: typeof rootRoute
    }
    '/livres/$slug': {
      id: '/livres/$slug'
      path: '/$slug'
      fullPath: '/livres/$slug'
      preLoaderRoute: typeof LivresSlugImport
      parentRoute: typeof LivresImport
    }
    '/reviews/$slug': {
      id: '/reviews/$slug'
      path: '/$slug'
      fullPath: '/reviews/$slug'
      preLoaderRoute: typeof ReviewsSlugImport
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
  BoutiqueRoute,
  CitationsRoute,
  GalerieRoute,
  LivresRoute: LivresRoute.addChildren({ LivresSlugRoute, LivresIndexRoute }),
  ReviewsRoute: ReviewsRoute.addChildren({
    ReviewsSlugRoute,
    ReviewsIndexRoute,
  }),
  ServicesRoute,
})

/* prettier-ignore-end */

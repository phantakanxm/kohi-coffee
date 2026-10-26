import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router'
import { RootLayout } from './components/layout/RootLayout.tsx'
import HomePage from './pages/Home/HomePage.tsx'

// The home page ships in the main bundle for the fastest first paint; other pages load on demand.
const pages: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'menu', lazy: () => import('./pages/Menu/MenuPage.tsx').then((m) => ({ Component: m.default })) },
  { path: 'our-story', lazy: () => import('./pages/OurStory/OurStoryPage.tsx').then((m) => ({ Component: m.default })) },
  { path: 'our-space', lazy: () => import('./pages/OurSpace/OurSpacePage.tsx').then((m) => ({ Component: m.default })) },
  { path: 'visit-us', lazy: () => import('./pages/VisitUs/VisitUsPage.tsx').then((m) => ({ Component: m.default })) },
  { path: '*', lazy: () => import('./pages/NotFound/NotFoundPage.tsx').then((m) => ({ Component: m.default })) },
]

// English at the root, Thai under /th — pages read the language from the URL.
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: 'th', children: pages }, ...pages],
  },
])

export function App() {
  return <RouterProvider router={router} />
}

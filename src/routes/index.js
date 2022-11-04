import { lazy, Suspense } from 'react';

const suspend = (Element) => (props) =>
  (
    <Suspense fallback={<p>Loading...</p>}>
      <Element {...props} />
    </Suspense>
  );

const routes = [
  {
    path: '/',
    Element: suspend(lazy(() => import('../pages/home'))),
  },
];

export default routes;

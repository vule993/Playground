import React, { lazy, Suspense } from 'react';

const LazyJokes = lazy(() => import('./Jokes'));

const Jokes = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyJokes {...props} />
  </Suspense>
);

export default Jokes;

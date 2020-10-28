import React, { lazy, Suspense } from 'react';

const LazyJoke = lazy(() => import('./Joke'));

const Joke = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyJoke {...props} question="lazy question" punchline="lazy punchline"  />
  </Suspense>
);

export default Joke;

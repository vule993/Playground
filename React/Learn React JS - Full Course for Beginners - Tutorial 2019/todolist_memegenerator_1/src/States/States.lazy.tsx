import React, { lazy, Suspense } from 'react';

const LazyStates = lazy(() => import('./States'));

const States = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStates {...props} />
  </Suspense>
);

export default States;

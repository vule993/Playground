import React, { lazy, Suspense } from 'react';

const LazyMyinfo = lazy(() => import('./Myinfo'));

const Myinfo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMyinfo {...props} />
  </Suspense>
);

export default Myinfo;

import React, { lazy, Suspense } from 'react';

const LazySchool = lazy(() => import('./School'));

const School = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySchool {...props} />
  </Suspense>
);

export default School;

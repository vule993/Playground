import React, { lazy, Suspense } from 'react';

const LazyEventHandling = lazy(() => import('./EventHandling'));

const EventHandling = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEventHandling {...props} />
  </Suspense>
);

export default EventHandling;

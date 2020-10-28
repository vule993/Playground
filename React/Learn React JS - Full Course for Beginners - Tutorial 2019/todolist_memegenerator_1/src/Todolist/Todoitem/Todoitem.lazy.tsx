import React, { lazy, Suspense } from 'react';

const LazyTodoitem = lazy(() => import('./Todoitem'));

const Todoitem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodoitem {...props} />
  </Suspense>
);

export default Todoitem;

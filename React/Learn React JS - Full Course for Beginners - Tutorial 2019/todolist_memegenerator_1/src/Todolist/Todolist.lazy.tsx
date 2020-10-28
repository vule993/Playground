import React, { lazy, Suspense } from 'react';

const LazyTodolist = lazy(() => import('./Todolist'));

const Todolist = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodolist {...props} />
  </Suspense>
);

export default Todolist;

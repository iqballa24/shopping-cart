import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Layout from '@/component/layout';

const Homepage = React.lazy(() => import('@/pages/home'));

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

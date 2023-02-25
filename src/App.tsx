import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Layout from '@/component/layout';
import AuthLayout from '@/component/layout/AuthLayout';

const Homepage = React.lazy(() => import('@/pages/Home'));
const StorePage = React.lazy(() => import('@/pages/Store'));
const ProductPage = React.lazy(() => import('@/pages/Product'));
const CartPage = React.lazy(() => import('@/pages/Cart'));
const LoginPage = React.lazy(() => import('@/pages/Login'));
const RegisterPage = React.lazy(()=>import('@/pages/Register'))

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index path="/auth"  element={<LoginPage />}/>
          <Route path="register"  element={<RegisterPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

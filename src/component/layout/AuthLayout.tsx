import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className="relative w-full overflow-y-auto">
      <Outlet />
    </main>
  );
};

export default AuthLayout;

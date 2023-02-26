import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/lib/hooks/useRedux';

const AuthLayout = () => {
  const { auth } = useAppSelector((state) => state.persist);
  const { isLoggedIn } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  return (
    <main className="relative w-full overflow-y-auto">
      <Outlet />
    </main>
  );
};

export default AuthLayout;

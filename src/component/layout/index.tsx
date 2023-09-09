import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import LoadingBar from 'react-redux-loading-bar';

import BottomBar from '@/component/layout/BottomBar';
import Header from '@/component/layout/Header';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncGetProducts } from '@/store/products/action';
import { useLocation, useNavigate } from 'react-router-dom';
import menus from '@/constant/menus';

const Layout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const isLoggedIn = useAppSelector((state) => state.persist.auth.isLoggedIn);
  const restrictedMenu = menus
    .filter((item) => item.restrictedAuth)
    .map((item) => item.path);

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  useEffect(() => {
    if (!isLoggedIn && restrictedMenu.includes(currentPath))
      return navigate('/');
  }, [isLoggedIn, currentPath]);

  return (
    <React.Fragment>
      <LoadingBar className="absolute !bg-primary h-[2px]" />
      <Header />
      <main className="overflow-y-scroll min-h-screen pt-5 pb-48 lg:px-10 scrollbar-hide">
        <Outlet />
        <section className="fixed md:hidden bg-white w-full left-0 right-0 bottom-0 z-10">
          <BottomBar />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Layout;

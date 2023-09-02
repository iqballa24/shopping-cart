import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import LoadingBar from 'react-redux-loading-bar';

import BottomBar from '@/component/layout/BottomBar';
import Header from '@/component/layout/Header';

import { useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncGetProducts } from '@/store/products/action';

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

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

import BottomBar from '@/component/layout/BottomBar';
import Header from '@/component/layout/Header';
import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main className='overflow-y-scroll min-h-screen pt-5 pb-48 lg:px-10'>
        <Outlet />
        <section className="fixed md:hidden bg-white w-full left-0 right-0 bottom-0 z-10">
          <BottomBar />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Layout;

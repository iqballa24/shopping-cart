import React from 'react';
import { Tooltip } from 'react-tooltip';
import { BiCartAlt } from 'react-icons/bi';

import { AvatarImage, Button, Categories, Searchbar } from '@/component/UI';

const Header = () => {
  const isLoggedIn = true;

  return (
    <header className="w-full flex flex-col gap-5 py-5 px-5 md:px-10 bg-white text-text">
      <h1 className="text-center md:hidden">LOGO</h1>
      <div className="flex flex-row gap-5 justify-center md:justify-between">
        <div className="flex flex-row gap-5 items-center">
          <h1 className="hidden md:block">LOGO</h1>
          <Searchbar />
          <Categories />
        </div>
        <div className="flex flex-row gap-5 items-center">
          <Tooltip id="cart-icon" className="!bg-primary" />
          {isLoggedIn ? (
            <div className="flex flex-row gap-5 items-center">
              <button type="button" className="hidden md:block">
                <AvatarImage name="Tengku Iqbal" size={32} />
              </button>
              <button type="button" className="text-text hover:text-primary">
                <div className="flex flex-row items-start gap-3">
                  <BiCartAlt id="cart-icon" size={22} />
                  <span className="hidden sm:block">Cart</span>
                </div>
              </button>
            </div>
          ) : (
            <div className="hidden md:flex flex-row gap-5">
              <Button
                type="button"
                title="Login"
                style="primary"
                onClick={() => console.log()}
              >
                Login
              </Button>
              <Button
                type="button"
                title="Register"
                style="secondary"
                onClick={() => console.log()}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

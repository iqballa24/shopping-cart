import React from 'react';
import { AiOutlineShop } from 'react-icons/ai';
import { BiCartAlt, BiCategory } from 'react-icons/bi';

import { AvatarImage, Button, Searchbar } from '@/component/UI';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="w-full flex flex-col gap-3 py-5 px-5 md:px-10 bg-white text-text">
      <Link to="/" className="md:hidden w-[120px] mx-auto">
        <img src="/logo.svg" alt="" />
      </Link>
      <div className="flex flex-row gap-5 justify-center md:justify-between">
        <div className="flex flex-row gap-5 items-center">
          <Link to="/" className="m-0 p-0">
            <img src="/logo.svg" alt="" className="hidden md:block" />
          </Link>
          <Searchbar />
          <div
            className="flex flex-row gap-2 items-center cursor-pointer hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="Categories"
          >
            <BiCategory size={20} />
            <span className="text-sm hidden lg:block">Categories</span>
          </div>
          <Link
            to="/store"
            className="flex flex-row gap-2 items-center cursor-pointer hover:text-primary"
            data-tooltip-id="tooltip"
            data-tooltip-content="Store"
          >
            <AiOutlineShop size={20} />
            <span className="text-sm hidden lg:block">Store</span>
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          {isLoggedIn ? (
            <div className="flex flex-row gap-5 items-center">
              <button
                type="button"
                className="hidden md:block text-text hover:text-primary"
              >
                <Link to="/cart" className="flex flex-row items-start gap-3">
                  <BiCartAlt
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Cart"
                    size={22}
                  />
                  <span className="text-sm hidden lg:block">Cart</span>
                </Link>
              </button>
              <button
                type="button"
                className="w-full max-w-[100px] lg:max-w-none"
              >
                <AvatarImage name="Tengku Iqbal" size={32} />
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

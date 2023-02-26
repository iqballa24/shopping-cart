import React, { useRef } from 'react';
import { AiOutlineLogout, AiOutlineShop } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

import { AvatarImage, Button, Searchbar } from '@/component/UI';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncLogout } from '@/store/auth/action';
import { productSliceAction } from '@/store/products';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filterCategory = useRef('');
  const { auth, carts } = useAppSelector((state) => state.persist);
  const { username, isLoggedIn } = auth;

  const logoutHandler = () => {
    dispatch(asyncLogout());
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productSliceAction.setFilter(filterCategory.current));
    filterCategory.current = e.target.value;
  };

  const enterHandler = () => {
    navigate('/store');
  };

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
          <Searchbar
            changeHandler={changeHandler}
            enterHandler={enterHandler}
          />
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
                <Link
                  to="/cart"
                  className="relative flex flex-row items-start gap-3"
                >
                  <BiCartAlt
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Cart"
                    size={22}
                  />
                  <span className="text-sm hidden lg:block">Cart</span>
                  <span className="absolute text-sm -top-3 -right-2 text-red-400">
                    {carts.totalItem}
                  </span>
                </Link>
              </button>
              <div className="relative w-full max-w-[100px] lg:max-w-none group cursor-pointer">
                <AvatarImage name={username} size={32} />
                <div className="hidden group-hover:flex flex-col absolute top-0 right-0 z-10">
                  <div className="h-[58px] bg-transparent"></div>
                  <div className="flex flex-col bg-white w-full p-5 rounded-md">
                    <button
                      type="button"
                      className="flex flex-row items-center space-x-5 hover:text-red-400 cursor-pointer"
                      onClick={logoutHandler}
                    >
                      <AiOutlineLogout size={18} title="Log out" />
                      <span className="text-sm whitespace-nowrap">Log out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Button
              type="button"
              title="Login"
              style="primary"
              onClick={() => navigate('/auth')}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

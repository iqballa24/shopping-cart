import React, { useRef, useState } from 'react';
import { AiOutlineLogout, AiOutlineShop } from 'react-icons/ai';
import { BiCartAlt, BiCategory } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

import { AvatarImage, Button, Searchbar } from '@/component/UI';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncLogout } from '@/store/auth/action';
import { productSliceAction } from '@/store/products';
import Modal from '@/component/UI/Modal';
import categories from '@/constant/categories';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filterCategory = useRef('');
  const [showModal, setShowModal] = useState(false);
  const { auth, carts } = useAppSelector((state) => state.persist);
  const { username, isLoggedIn } = auth;

  const logoutHandler = () => {
    dispatch(asyncLogout());
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterCategory.current = e.target.value;
    dispatch(productSliceAction.setFilter(filterCategory.current));
  };

  const enterHandler = () => {
    navigate('/store');
  };

  const clickCategoryHandler = (category: string) => {
    dispatch(productSliceAction.setCategory(category));
    navigate('/store');
    setShowModal(false);
  };

  return (
    <>
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
            <button
              type="button"
              className="flex flex-row gap-2 items-center cursor-pointer hover:text-primary"
              data-tooltip-id="tooltip"
              data-tooltip-content="Categories"
              onClick={() => setShowModal(true)}
            >
              <BiCategory size={20} />
              <span className="text-sm hidden lg:block">Categories</span>
            </button>
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
                    <span className="absolute text-xs font-bold -top-3 -right-1 text-primary">
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
                        <span className="text-sm whitespace-nowrap">
                          Log out
                        </span>
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
      <Modal
        title="Categories"
        isShow={showModal}
        onClose={() => setShowModal(false)}
      >
        <ul className="flex flex-row gap-3 flex-wrap mt-5">
          {categories.map((category) => (
            <li
              key={category.id}
              className="flex-1 bg-white border py-5 px-10 rounded-md flex flex-row items-center gap-3 hover:border-primary cursor-pointer"
              onClick={() => clickCategoryHandler(category.value)}
            >
              <category.icon />
              <span className="whitespace-nowrap ">{category.label}</span>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default React.memo(Header);

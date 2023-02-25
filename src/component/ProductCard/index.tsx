import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';

import { Button } from '@/component/UI';
import { Product } from '@/types';
import { Link } from 'react-router-dom';

const ProductItem: React.FC<Product> = ({
  id,
  title,
  rating,
  totalSold,
  price,
  isAddToCart,
}) => {
  return (
    <Link to={`/store/product/${id}`} className="w-full sm:max-w-[200px] flex flex-col rounded-md border overflow-hidden hover:-translate-y-2 cursor-pointer transition duration-300 ease-in-out">
      <div className="p-10 bg-white ">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h4>{title}</h4>
        <span className="font-bold">${price}</span>
        <div className="flex flex-row gap-2 text-sm divide-x divide-text">
          <div className="flex flex-row gap-1 items-center">
            <AiFillStar color="#ffc400" /> <p>{rating}</p>
          </div>
          <p className="pl-2">Sold {totalSold}</p>
        </div>
        {isAddToCart ? (
          <Button
            type="button"
            title="remove from cart"
            style="secondary"
            isFull
            onClick={() => console.log()}
          >
            <div className="flex flex-row items-center gap-2">
              <MdOutlineRemoveShoppingCart />
              <p>Remove</p>
            </div>
          </Button>
        ) : (
          <Button
            type="button"
            title="add to cart"
            style="primary"
            isFull
            onClick={() => console.log()}
          >
            <div className="flex flex-row items-center gap-2">
              <MdOutlineAddShoppingCart />
              <p>Add</p>
            </div>
          </Button>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;

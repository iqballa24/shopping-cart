import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from 'react-icons/md';

import { Button } from '@/component/UI';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { cartSliceAction } from '@/store/cart';
import { productSliceAction } from '@/store/products';
import { Cart } from '@/types';
import toast from 'react-hot-toast';

type Props = {
  id: string;
  title: string;
  rating: number;
  totalSold: number;
  price: number;
  hasAddToCart: boolean;
  image: string;
};

const ProductItem: React.FC<Props> = ({
  id,
  title,
  image,
  rating,
  totalSold,
  price,
  hasAddToCart,
}) => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.persist.auth);

  const addItemToCart = ({ id, title, price, image }: Cart) => {
    if (!isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }

    dispatch(cartSliceAction.addItemToCart({ id, title, price, image }));
    dispatch(productSliceAction.productAddToCart(id));
  };

  const removeItemFromCart = (id: string) => {
    dispatch(cartSliceAction.removeItemFromCart(id));
    dispatch(productSliceAction.productRemoveFromCart(id));
  };

  return (
    <div className="w-full sm:max-w-[220px] flex flex-col rounded-md border overflow-hidden hover:ring-1 hover:ring-primary transition duration-300 ease-in-out">
      <div className="p-10 bg-white ">
        <img src={image} alt="" className="w-full h-36" />
      </div>
      <div className="flex flex-col h-full justify-between gap-2 p-4">
        <Link
          to={`/store/product/${id}`}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <h4>{title}</h4>
          <span className="font-bold">${price}</span>
          <div className="flex flex-row  gap-2 text-sm divide-x divide-text">
            <div className="flex flex-row gap-1 items-center">
              <AiFillStar color="#ffc400" /> <p>{rating}</p>
            </div>
            <p className="pl-2">Sold {totalSold}</p>
          </div>
        </Link>
        {hasAddToCart ? (
          <Button
            type="button"
            title="remove from cart"
            style="secondary"
            isFull
            onClick={() => removeItemFromCart(id)}
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
            onClick={() => addItemToCart({ id, title, price, image })}
          >
            <div className="flex flex-row items-center gap-2">
              <MdOutlineAddShoppingCart />
              <p>Add</p>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

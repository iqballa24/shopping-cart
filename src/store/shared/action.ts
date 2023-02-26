/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Dispatch } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { RootState } from '@/store';
import { cartSliceAction } from '@/store/cart';
import { productSliceAction } from '@/store/products';
import { Cart } from '@/types';

export const addItemToCartAction = ({ id, title, price, image }: Cart) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { auth } = getState().persist;

    if (!auth.isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }

    dispatch(cartSliceAction.addItemToCart({ id, title, price, image }));
    dispatch(productSliceAction.productAddToCart(id));

    const { carts } = getState().persist;

    const totalPrice = carts.item
      .map((cart) => cart.amount! * cart.price)
      .reduce((curr, prev) => curr + prev);

    dispatch(cartSliceAction.receiveTotalPrice(totalPrice.toFixed(2)));
  };
};

export const removeItemFromCartAction = (id: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { persist } = getState();

    if (!persist.auth.isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }

    dispatch(cartSliceAction.removeItemFromCart(id));
    dispatch(productSliceAction.productRemoveFromCart(id));

    const { carts } = getState().persist;

    const totalPricePerItem = carts.item.map(
      (cart) => cart.amount! * cart.price
    );

    const totalPrice =
      totalPricePerItem.length === 0
        ? 0
        : totalPricePerItem.reduce((curr, prev) => curr + prev);

    dispatch(cartSliceAction.receiveTotalPrice(totalPrice.toFixed(2)));
  };
};

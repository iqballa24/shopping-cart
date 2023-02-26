/* eslint-disable @typescript-eslint/no-non-null-assertion */
import toast from 'react-hot-toast';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { cartSliceAction } from '@/store/cart';

export const increaseItemAction = (id: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { auth } = getState().persist;

    if (!auth.isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }

    dispatch(cartSliceAction.increaseItemCart(id));

    const { carts } = getState().persist;

    const totalPrice = carts.item
      .map((cart) => cart.amount! * cart.price)
      .reduce((curr, prev) => curr + prev);

    dispatch(cartSliceAction.receiveTotalPrice(totalPrice.toFixed(2)));
  };
};

export const decreaseItemAction = (id: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const { auth } = getState().persist;

    if (!auth.isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }

    dispatch(cartSliceAction.decreseItemCart(id));

    const { carts } = getState().persist;

    const totalPrice = carts.item
      .map((cart) => cart.amount! * cart.price)
      .reduce((curr, prev) => curr + prev);

    dispatch(cartSliceAction.receiveTotalPrice(totalPrice.toFixed(2)));
  };
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ItemProduct } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

type CartType = {
  item: ItemProduct[];
  totalItem: number;
  totalPrice: number;
};

const initialState: CartType = {
  item: [],
  totalItem: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      state.totalItem = state.totalItem + 1;
      state.item.push({ ...payload, amount: 1 });
    },
    removeItemFromCart(state, { payload }) {
      const itemIndex = state.item.findIndex((cart) => cart.id === payload);
      const existItem = state.item[itemIndex];
      state.totalItem = state.totalItem - existItem.amount!;

      const newCarts = state.item.filter((cart) => cart.id !== payload);
      state.item = newCarts;

    },
    increaseItemCart(state, { payload }) {
      const newCarts = state.item.map((cart) => {
        if (cart.id === payload) {
          return {
            ...cart,
            amount: cart.amount! + 1,
          };
        } else {
          return { ...cart };
        }
      });
      state.totalItem = state.totalItem + 1;
      state.item = newCarts;
    },
    decreseItemCart(state, { payload }) {
      const itemIndex = state.item.findIndex((item) => item.id === payload);

      const existItem = state.item[itemIndex];

      if (existItem.amount !== 1) {
        const newCarts = state.item.map((cart) => {
          if (cart.id === payload) {
            return { ...cart, amount: cart.amount! - 1 };
          } else {
            return { ...cart };
          }
        });
        state.item = newCarts;
        state.totalItem = state.totalItem - 1;
      }
    },
  },
});

export const cartSliceAction = cartSlice.actions;
export default cartSlice;

/**
 * skenario test
 *
 * - increaseItemAction thunk
 *  - should return an error when dispatch increaseItemAction thunk but not logged in yet
 *  - should dispatch increaseItemAction thunk correctly when has logged in
 *
 * - decreaseItemAction thunk
 *  - should return an error when dispatcj decreaseItemAction thunk but not logged in yet
 * - should dispatch decreaseItemAction thunk correctly when has logged in
 */

import store from '@/store';
import { authSliceAction } from '@/store/auth';
import { cartSliceAction } from '@/store/cart';
import { decreaseItemAction, increaseItemAction } from './action';
import { toast } from 'react-hot-toast';
import {
  describe,
  it,
  afterEach,
  beforeEach,
  expect,
  jest,
} from '@jest/globals';

const fakeProduct = {
  id: 1,
  title: 'product 1',
  price: 24.12,
  category: 'Electronic',
  description: 'product description',
  image: '...',
};

describe('increaseItemAction thunk', () => {
  beforeEach(() => {
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(authSliceAction.unsetAuthUser());
  });

  afterEach(() => {
    store.dispatch(cartSliceAction.resetToInitialState());
  });

  it('should return an error when dispatch increaseItemAction thunk but not logged in yet', () => {
    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.error = jest.fn();

    // action
    increaseItemAction(fakeProduct.id)(dispatch, getState);

    // asserts
    expect(toast.error).toHaveBeenCalledWith(
      'You are not logged in. Login first!'
    );
  });

  it('should dispatch increaseItemAction thunk correctly when has logged in', () => {
    // arrange
    const initialState = {
      isLoggedIn: true,
      username: 'Tengku Iqbal Nugraha',
      token: '123456789',
    };

    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);

    // dispatch auth login
    store.dispatch(authSliceAction.setAuth(initialState));

    // action increase item
    increaseItemAction(fakeProduct.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      store.dispatch(cartSliceAction.increaseItemCart(fakeProduct.id))
    );
    expect(dispatch).toHaveBeenCalledWith(
      store.dispatch(
        cartSliceAction.receiveTotalPrice(fakeProduct.price.toFixed(2))
      )
    );
  });
});

describe('decreaseItemAction thunk', () => {
  beforeEach(() => {
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(authSliceAction.unsetAuthUser());
  });

  afterEach(() => {
    store.dispatch(cartSliceAction.resetToInitialState());
  });

  it('should return an error when dispatcj decreaseItemAction thunk but not logged in yet', () => {
    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.error = jest.fn();

    // action
    decreaseItemAction(fakeProduct.id)(dispatch, getState);

    // asserts
    expect(toast.error).toHaveBeenCalledWith(
      'You are not logged in. Login first!'
    );
  });

  it('should dispatch decreaseItemAction thunk correctly when has logged in', () => {
    // arrange
    const initialState = {
      isLoggedIn: true,
      username: 'Tengku Iqbal Nugraha',
      token: '123456789',
    };

    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);

    // dispatch auth login
    store.dispatch(authSliceAction.setAuth(initialState));

    // action increase item
    decreaseItemAction(fakeProduct.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      store.dispatch(cartSliceAction.decreseItemCart(fakeProduct.id))
    );
    expect(dispatch).toHaveBeenCalledWith(
      store.dispatch(
        cartSliceAction.receiveTotalPrice(fakeProduct.price.toFixed(2))
      )
    );
  });
});

/**
 * test scenario for cartSlice reducer
 *
 * - cartSlice reducer
 *  - should intially set cart to initial state
 *  - should add item to cart and increase total item when given addItemToCart action
 *  - should remove item from cart and decrease total item when given removeItemFromCart action
 *  - should increase total item when given increaseItemCart action
 *  - should decrease total item when given decreseItemCart action
 *  - should not decrease total item when given decreseItemCart action but amount item is equal to one
 */

import store from '@/store';
import { cartSliceAction } from '@/store/cart';

describe('cartSlice reducer', () => {
  beforeEach(() => {
    store.dispatch(cartSliceAction.resetToInitialState());
  });

  it('should initially set cart to initial state', () => {
    // arrange
    const initialState = {
      item: [],
      totalItem: 0,
      totalPrice: 0,
    };

    // action
    const state = store.getState().persist.carts;

    // assert
    expect(state).toEqual(initialState);
  });

  it('should add item to cart when given addItemToCart action', () => {
    // arrange
    const fakeProduct = {
      id: 1,
      title: 'product 1',
      price: 24.12,
      category: 'Electronic',
      description: 'product description',
      image: '...',
    };

    // action
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    const state = store.getState().persist.carts;

    // assert
    expect(state.item).toHaveLength(1);
    expect(state.totalItem).toEqual(1);
  });

  it('should remove item from cart and decrease total item when given removeItemFromCart action', () => {
    // arrange
    const fakeProduct = {
      id: 1,
      title: 'product 1',
      price: 24.12,
      category: 'Electronic',
      description: 'product description',
      image: '...',
    };

    // action
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(cartSliceAction.removeItemFromCart(1));
    const state = store.getState().persist.carts;

    // assert
    expect(state.item).toHaveLength(0);
    expect(state.totalItem).toEqual(0);
  });

  it('should increase total item when given increaseItemCart action', () => {
    // arrange
    const fakeProduct = {
      id: 1,
      title: 'product 1',
      price: 24.12,
      category: 'Electronic',
      description: 'product description',
      image: '...',
    };

    // action
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(cartSliceAction.increaseItemCart(1));
    const state = store.getState().persist.carts;

    // assert
    expect(state.totalItem).toEqual(2);
  });

  it('should decrease total item when amount item is equal to one', () => {
    // arrange
    const fakeProduct = {
      id: 1,
      title: 'product 1',
      price: 24.12,
      category: 'Electronic',
      description: 'product description',
      image: '...',
    };

    // action
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(cartSliceAction.increaseItemCart(1));
    store.dispatch(cartSliceAction.decreseItemCart(1));
    const state = store.getState().persist.carts;

    // assert
    expect(state.totalItem).toEqual(1);
  });

  it('should not decrease total item when given decreseItemCart action but amount item is equal to one', () => {
    // arrange
    const fakeProduct = {
      id: 1,
      title: 'product 1',
      price: 24.12,
      category: 'Electronic',
      description: 'product description',
      image: '...',
    };

    // action
    store.dispatch(cartSliceAction.addItemToCart(fakeProduct));
    store.dispatch(cartSliceAction.decreseItemCart(1));
    const state = store.getState().persist.carts;

    // assert
    expect(state.totalItem).toEqual(1);
  });
});

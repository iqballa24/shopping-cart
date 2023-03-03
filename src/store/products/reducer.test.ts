/**
 * test scenario for productsSlice reducer
 *
 * - productsSlice reducer
 *  - should initially set products to initial state
 *  - should return products when given setProducts action
 *  - should change loading state when given toggleLoading action
 *  - should set selected product correctly when given setSelectedProduct action
 *  - should change hasAddToCart value to be true when given productAddToCart action
 *  - should change hasAddToCart value to be false when given productRemoveFromCart action
 *  - should change filter state when given setFilter action
 */

import store from '@/store';
import { productSliceAction } from '@/store/products';

const initialState = {
  data: [],
  isLoading: true,
  selectedProduct: {
    id: '',
    title: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    hasAddToCart: false,
  },
  filter: '',
  category: '',
};

const fakeProduct = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
  hasAddToCart: false,
};

describe('productSlice reducer', () => {
  it('should initially set products to initial state', () => {
    const state = store.getState().product;

    // assert
    expect(state).toEqual(initialState);
  });

  it('should return products when given setProducts action', () => {
    // action
    store.dispatch(productSliceAction.setProducts([fakeProduct]));
    const state = store.getState().product;

    // assert
    expect(state.data).toEqual([fakeProduct]);
    expect(state.data).toHaveLength(1);
  });

  it('should change loading state when given toggleLoading action', () => {
    // action
    store.dispatch(productSliceAction.toggleLoading(true));

    const state = store.getState().product;

    // assert
    expect(state.isLoading).toEqual(true);
  });

  it('should set selected product correctly when given setSelectedProduct action', () => {
    // action
    store.dispatch(productSliceAction.setSelectedProduct(fakeProduct));
    const state = store.getState().product;

    // assert
    expect(state.selectedProduct).toEqual(fakeProduct);
  });

  it('should change hasAddToCart value to be true when given productAddToCart action', () => {
    // action
    store.dispatch(productSliceAction.productAddToCart(1));
    const state = store.getState().product;

    // assert
    expect(state.selectedProduct.hasAddToCart).toBe(true);
    expect(state.data).toEqual([{ ...fakeProduct, hasAddToCart: true }]);
  });

  it('should change hasAddToCart value to be false when given productRemoveFromCart action', () => {
    // action
    store.dispatch(productSliceAction.productRemoveFromCart(1));
    const state = store.getState().product;

    // assert
    expect(state.selectedProduct.hasAddToCart).toBe(false);
    expect(state.data).toEqual([fakeProduct]);
  });

  it('should change filter state when given setFilter action', () => {
    // action
    store.dispatch(productSliceAction.setFilter('test_filter'));
    const state = store.getState().product;

    // assert
    expect(state.filter).toEqual('test_filter');
  });

  it('should change category state when given setCategory action', () => {
    // action
    store.dispatch(productSliceAction.setCategory('test_category'));
    const state = store.getState().product;

    // assert
    expect(state.category).toEqual('test_category');
  });
});

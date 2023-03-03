/**
 * skenario test
 *
 * - asyncGetProducts thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch alert error when data fetching failed
 *
 * - asyncGetProductDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch alert error when data fetching failed
 */

import store from '@/store';
import API from '@/lib/service/API';
import toast from 'react-hot-toast';
import {
  describe,
  it,
  afterEach,
  beforeEach,
  expect,
  jest,
} from '@jest/globals';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { productSliceAction } from '@/store/products';
import { asyncGetProductDetail, asyncGetProducts } from './action';

const fakeSuccessResponse = {
  data: [
    {
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
    },
  ],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetProducts thunk', () => {
  beforeEach(() => {
    API._getProducts = API.getProducts;
  });

  afterEach(() => {
    API.getProducts = API._getProducts;

    delete API._getProducts;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    API.getProducts = () => Promise.resolve(fakeSuccessResponse);

    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.success = jest.fn();

    // action
    await asyncGetProducts()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      productSliceAction.toggleLoading(true)
    );
    expect(dispatch).toHaveBeenCalledWith(
      productSliceAction.setProducts(fakeSuccessResponse.data)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch alert error when data fetching failed', async () => {
    // arrange
    API.getProducts = () => Promise.reject(fakeErrorResponse);

    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.error = jest.fn();

    // action
    await asyncGetProducts()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncGetProductDetail thunk', () => {
  beforeEach(() => {
    API._getDetailProduct = API.getDetailProduct;
  });

  afterEach(() => {
    API.getDetailProduct = API._getDetailProduct;

    delete API._getDetailProduct;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    API.getDetailProduct = () =>
      Promise.resolve({ data: fakeSuccessResponse.data[0] });

    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.success = jest.fn();

    // action
    await asyncGetProductDetail(fakeSuccessResponse.data[0].id)(
      dispatch,
      getState
    );

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      productSliceAction.setSelectedProduct(fakeSuccessResponse.data[0])
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch alert error when data fetching failed', async () => {
    // arrange
    API.getDetailProduct = () => Promise.reject(fakeErrorResponse);

    // mock function
    const dispatch = jest.fn();
    const getState = jest.fn(store.getState);
    toast.error = jest.fn();

    // action
    await asyncGetProductDetail(fakeSuccessResponse.data[0].id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

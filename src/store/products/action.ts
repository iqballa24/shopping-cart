import { Dispatch } from 'redux';
import toast from 'react-hot-toast';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import API from '@/lib/service/API';
import { productSliceAction } from '@/store/products';
import { Cart, ItemProduct } from '@/types';
import { RootState } from '@/store';

export const asyncGetProducts = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { persist } = getState();

    dispatch(showLoading());
    dispatch(productSliceAction.toggleLoading(true));

    try {
      const res = await API.getProducts();

      const carts = persist.carts.item.map((item: Cart) => item.id);

      const products = res?.data.map((product: ItemProduct) => {
        const hasAddToCart = carts.includes(product.id);
        return { ...product, hasAddToCart };
      });

      dispatch(productSliceAction.setProducts(products));
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }
    } finally {
      dispatch(hideLoading());
      dispatch(productSliceAction.toggleLoading(false));
    }
  };
};

export const asyncGetProductDetail = (id: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { persist } = getState();

    dispatch(showLoading());
    dispatch(productSliceAction.toggleLoading(true));

    try {
      const res = await API.getDetailProduct(id);

      const carts = persist.carts.item.map((item: Cart) => item.id);

      const product = {
        ...res?.data,
        hasAddToCart: carts.includes(res?.data.id),
      };

      dispatch(productSliceAction.setSelectedProduct(product));
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }
    } finally {
      dispatch(hideLoading());
      dispatch(productSliceAction.toggleLoading(false));
    }
  };
};

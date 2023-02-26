import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncGetProductDetail } from '@/store/products/action';
import { Cart } from '@/types';

import DetailProduct from '@/component/DetailProduct';
import {
  addItemToCartAction,
  removeItemFromCartAction,
} from '@/store/shared/action';
import { decreaseItemAction, increaseItemAction } from '@/store/cart/action';

const Product = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedProduct, isLoading } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (id) {
      dispatch(asyncGetProductDetail(id));
    }
  }, [id]);

  const addItemToCart = ({ id, title, price, image }: Cart) => {
    dispatch(addItemToCartAction({ id, title, price, image }));
  };

  const removeItemFromCart = (id: string) => {
    dispatch(removeItemFromCartAction(id));
  };

  const increaseHandler = (id: string) => {
    dispatch(increaseItemAction(id));
  };

  const decreaseHandler = (id: string) => {
    dispatch(decreaseItemAction(id));
  };

  return (
    <DetailProduct
      isLoading={isLoading}
      product={selectedProduct}
      addItemHandler={addItemToCart}
      removeItemHandler={removeItemFromCart}
      increaseHandler={increaseHandler}
      decreaseHandler={decreaseHandler}
    />
  );
};

export default Product;

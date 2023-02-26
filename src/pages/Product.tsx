import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncGetProductDetail } from '@/store/products/action';
import { cartSliceAction } from '@/store/cart';
import { Cart } from '@/types';

import DetailProduct from '@/component/DetailProduct';
import { productSliceAction } from '@/store/products';

const Product = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedProduct, isLoading } = useAppSelector(
    (state) => state.product
  );
  const { isLoggedIn } = useAppSelector((state) => state.persist.auth);

  useEffect(() => {
    if (id) {
      dispatch(asyncGetProductDetail(id));
    }
  }, [id]);

  const addItemToCart = ({ id, title, price }: Cart) => {
    if (!isLoggedIn) {
      toast.error('You are not logged in. Login first!');
      return;
    }
    dispatch(cartSliceAction.addItemToCart({ id, title, price }));
    dispatch(productSliceAction.productAddToCart(id));
  };

  const removeItemFromCart = (id: string) => {
    dispatch(cartSliceAction.removeItemFromCart(id));
    dispatch(productSliceAction.productRemoveFromCart(id));
  };

  return (
    <DetailProduct
      isLoading={isLoading}
      product={selectedProduct}
      addItemHandler={addItemToCart}
      removeItemHandler={removeItemFromCart}
    />
  );
};

export default Product;

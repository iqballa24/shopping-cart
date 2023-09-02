import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { asyncGetProductDetail } from '@/store/products/action';
import DetailProduct from '@/component/DetailProduct';

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

  return <DetailProduct isLoading={isLoading} product={selectedProduct} />;
};

export default Product;

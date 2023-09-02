import React, { useEffect, useState } from 'react';
import { ItemProduct } from '@/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import ProductImg from '@/component/DetailProduct/ProductImg';
import ProductDescription from '@/component/DetailProduct/ProductDescription';
import ProductATCBtn from '@/component/DetailProduct/ProductATCBtn';

import {
  addItemToCartAction,
  removeItemFromCartAction,
} from '@/store/shared/action';
import { decreaseItemAction, increaseItemAction } from '@/store/cart/action';

type Props = {
  isLoading: boolean;
  product: ItemProduct;
};

const DetailProduct: React.FC<Props> = ({ isLoading, product }) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);
  const { item, totalItem } = useAppSelector((state) => state.persist.carts);

  const {
    id,
    title,
    rating,
    price,
    image,
    category,
    description,
    hasAddToCart,
  } = product;

  useEffect(() => {
    if (hasAddToCart) {
      const amount =
        item.filter((product) => product.id === id)[0]?.amount || 0;
      setAmount(amount);
    }
  }, [hasAddToCart, id, totalItem]);

  return (
    <section className="flex flex-col md:flex-row gap-10 p-5 max-w-7xl mx-auto">
      <ProductImg isLoading={isLoading} image={image} />
      <ProductDescription
        isLoading={isLoading}
        title={title}
        rating={rating}
        category={category}
        description={description}
        price={price}
      />
      <ProductATCBtn
        isLoading={isLoading}
        amount={amount}
        hasAddToCart={hasAddToCart}
        addItemHandler={() =>
          dispatch(addItemToCartAction({ id, title, price, image }))
        }
        removeItemHandler={() => dispatch(removeItemFromCartAction(id))}
        increaseHandler={() => dispatch(increaseItemAction(id))}
        decreaseHandler={() => dispatch(decreaseItemAction(id))}
      />
    </section>
  );
};

export default React.memo(DetailProduct);

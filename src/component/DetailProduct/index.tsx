import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineAddShoppingCart,
} from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

import { Tag, Counter, Button } from '@/component/UI';
import { Cart, ItemProduct } from '@/types';
import { useAppSelector } from '@/lib/hooks/useRedux';

type Props = {
  isLoading: boolean;
  product: ItemProduct;
  addItemHandler: ({ id, title, price }: Cart) => void;
  removeItemHandler: (id: string) => void;
  increaseHandler: (id: string) => void;
  decreaseHandler: (id: string) => void;
};

const DetailProduct: React.FC<Props> = ({
  isLoading,
  product,
  addItemHandler,
  removeItemHandler,
  increaseHandler,
  decreaseHandler,
}) => {
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
    <section className="flex flex-col md:flex-row gap-10 p-5">
      {isLoading ? (
        <div className="w-full md:w-4/12 lg:w-3/12 h-fit">
          <Skeleton height={400} />
        </div>
      ) : (
        <div className="w-full md:w-4/12 lg:w-3/12 h-fit p-10 bg-white ">
          <img src={image} alt="" className="w-full" />
        </div>
      )}
      <div className="w-full md:w-8/12 lg:w-9/12 flex flex-col lg:flex-row gap-10 justify-between">
        <div className="w-full lg:w-8/12 flex flex-col gap-5">
          <div className="border-b pb-10 border-text/30">
            {isLoading ? (
              <Skeleton height={40} />
            ) : (
              <h2 className="text-xl md:text-2xl font-bold leading-8">
                {title}
              </h2>
            )}
            {isLoading ? (
              <Skeleton count={2} width={80} />
            ) : (
              <div className="flex flex-row items-center gap-2 divide-x divide-text pt-3 mb-8">
                <p>{rating.count}</p>
                <div className="flex flex-row gap-1 items-center pl-2">
                  <AiFillStar color="#ffc400" /> <p>{rating.rate}</p>
                </div>
              </div>
            )}
            {isLoading ? (
              <Skeleton width={100} />
            ) : (
              <div className="font-bold text-4xl">${price}</div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            {isLoading ? <Skeleton /> : <Tag text={category} />}
            {isLoading ? <Skeleton height={200} /> : <p>{description}</p>}
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <div className="w-full flex flex-col gap-5 p-5 bg-white rounded-md">
              <h3 className="text-base md:text-lg font-bold">Add to Cart</h3>
              {hasAddToCart ? (
                <>
                  <Counter
                    value={amount}
                    increaseHandler={() => increaseHandler(id)}
                    decreaseHandler={() => decreaseHandler(id)}
                  />
                  <Button
                    type="button"
                    title="remove from cart"
                    style="secondary"
                    isFull
                    onClick={() => removeItemHandler(id)}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <MdOutlineRemoveShoppingCart />
                      <p>Remove</p>
                    </div>
                  </Button>
                </>
              ) : (
                <Button
                  type="button"
                  title="add to cart"
                  style="primary"
                  isFull
                  onClick={() => addItemHandler({ id, title, price, image })}
                >
                  <div className="flex flex-row items-center gap-2">
                    <MdOutlineAddShoppingCart />
                    <p>Add</p>
                  </div>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(DetailProduct);

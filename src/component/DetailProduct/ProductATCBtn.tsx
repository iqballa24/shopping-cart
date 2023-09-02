import { Button, Counter } from '@/component/UI';
import React from 'react';
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';

type Props = {
  isLoading: boolean;
  hasAddToCart: boolean;
  amount: number;
  increaseHandler: () => void;
  decreaseHandler: () => void;
  removeItemHandler: () => void;
  addItemHandler: () => void;
};

const ProductATCBtn = (props: Props) => {
  const {
    isLoading,
    hasAddToCart,
    amount,
    addItemHandler,
    removeItemHandler,
    increaseHandler,
    decreaseHandler,
  } = props;

  return (
    <div className="w-full lg:w-3/12">
      {isLoading ? (
        <Skeleton height={200} />
      ) : (
        <div className="w-full flex flex-col gap-5 p-5 bg-white rounded-md">
          <h3 className="text-base md:text-lg font-bold">Add to Cart</h3>
          {hasAddToCart ? (
            <>
              <Counter
                value={amount}
                increaseHandler={increaseHandler}
                decreaseHandler={decreaseHandler}
              />
              <Button
                type="button"
                title="remove from cart"
                style="secondary"
                isFull
                onClick={removeItemHandler}
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
              onClick={addItemHandler}
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
  );
};

export default ProductATCBtn;

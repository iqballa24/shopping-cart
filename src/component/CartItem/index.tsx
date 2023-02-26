import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { Counter } from '@/component/UI';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { cartSliceAction } from '@/store/cart';
import { productSliceAction } from '@/store/products';

type Props = {
  image: string;
  id: string;
  title: string;
  price: number;
  amount: number;
};

const CartItem: React.FC<Props> = ({ id, image, title, price, amount }) => {
  const dispatch = useAppDispatch();

  const increaseHandler = () => {
    dispatch(cartSliceAction.increaseItemCart(id));
  };

  const decreaseHandler = () => {
    dispatch(cartSliceAction.decreseItemCart(id));
  };

  const removeItemFromCart = () => {
    dispatch(cartSliceAction.removeItemFromCart(id));
    dispatch(productSliceAction.productRemoveFromCart(id));
  };

  return (
    <div className="flex flex-row gap-10 p-4 bg-white rounded-md">
      <div className="w-2/12 md:p-6 bg-white rounded-md">
        <img src={image} alt="" className="w-full h-full max-h-20" />
      </div>
      <div className="w-10/12 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h4>{title}</h4>
          <span className="font-bold">${price}</span>
        </div>
        <div className="flex flex-row items-center gap-5 w-full max-w-[160px] ml-auto">
          <button type="button" onClick={removeItemFromCart}>
            <HiOutlineTrash
              className="text-slate-400 hover:text-red-400"
              size={22}
            />
          </button>
          <Counter
            value={amount}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);

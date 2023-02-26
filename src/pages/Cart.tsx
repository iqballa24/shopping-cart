import React from 'react';
import CartItem from '@/component/CartItem';
import { useAppSelector } from '@/lib/hooks/useRedux';

const Cart = () => {
  const { item: Carts, totalItem } = useAppSelector(
    (state) => state.persist.carts
  );

  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10 p-5">
      <div className="w-full md:w-8/12 flex flex-col gap-5">
      {Carts.length === 0 && <p className='text-center'>-- You have no items in your cart --</p>}
        {Carts.map((cart) => (
          <CartItem
            key={cart.id}
            id={cart.id}
            image={cart.image}
            title={cart.title}
            price={cart.price}
            amount={cart.amount || 0}
          />
        ))}
      </div>
      <div className="w-full h-fit md:w-4/12 bg-white flex flex-col gap-5 p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Total Item </h3>
          <p>{totalItem}</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;

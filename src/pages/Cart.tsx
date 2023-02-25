import React from 'react';
import CartItem from '@/component/CartItem';

const Cart = () => {
  return (
    <section className="flex flex-col md:flex-row h-full max-w-6xl mx-auto gap-10 p-5">
      <div className="w-full md:w-8/12 flex flex-col gap-5">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="w-full md:w-4/12">Tester</div>
    </section>
  );
};

export default Cart;

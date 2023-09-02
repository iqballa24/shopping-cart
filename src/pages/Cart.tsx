/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import CartItem from '@/component/CartItem';
import { useAppSelector } from '@/lib/hooks/useRedux';
import { Button } from '@/component/UI';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { item: Carts, totalPrice } = useAppSelector(
    (state) => state.persist.carts
  );

  if (Carts.length === 0) {
    return (
      <section className="flex flex-col gap-3 justify-center items-center mx-auto">
        <img
          src="/empty.svg"
          className="w-full max-w-sm object-scale-down"
          alt=""
        />
        <p className="text-center w-full">You have no items in your cart</p>
        <Button
          type="button"
          style="secondary"
          title="buy item"
          onClick={() => navigate('/store')}
        >
          Buy item
        </Button>
      </section>
    );
  }

  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 p-5">
      <div className="w-full md:w-8/12 flex flex-col gap-5">
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
        <h3 className="text-xl font-bold">Review </h3>
        <ul className="flex flex-col gap-5">
          <li className="flex flex-row justify-between text-sm gap-3 uppercase font-bold">
            <p>Product Name - (qty)</p>
            <p>price</p>
          </li>
          {Carts.map((cart) => (
            <li
              key={cart.id}
              className="flex flex-row justify-between text-sm gap-3"
            >
              <p>
                {cart.title} - ({cart.amount})
              </p>
              <p>${(cart.price * cart.amount!).toFixed(2)}</p>
            </li>
          ))}
          <li className="flex flex-row justify-between text-sm gap-3 uppercase font-bold mt-10">
            <p>Total Amount</p>
            <p>${totalPrice}</p>
          </li>
        </ul>
        <Button
          type="button"
          title="checkout"
          style="primary"
          onClick={() => console.log()}
          disabled
        >
          Checkout
        </Button>
      </div>
    </section>
  );
};

export default Cart;

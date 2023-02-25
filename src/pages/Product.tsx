import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from 'react-icons/md';
import { Button, Counter, Tag } from '@/component/UI';

const Product = () => {
  const isAdded = true;
  return (
    <section className="flex flex-col md:flex-row gap-10 p-5">
      <div className="w-full md:w-3/12 h-fit p-10 bg-white ">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-full md:w-9/12 flex flex-col lg:flex-row gap-10 justify-between">
        <div className="w-full lg:w-8/12 flex flex-col gap-5">
          <div className="border-b pb-10 border-text/30">
            <h2 className="text-xl md:text-2xl font-bold leading-8">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h2>
            <div className="flex flex-row items-center gap-2 divide-x divide-text pt-3 mb-8">
              <p>Sold 200</p>
              <div className="flex flex-row gap-1 items-center pl-2">
                <AiFillStar color="#ffc400" /> <p>4.3</p>
              </div>
            </div>
            <div className="font-bold text-4xl">$12.20</div>
          </div>
          <div className="flex flex-col gap-5">
            <Tag text="Electronics" />
            <p>
              Slim-fitting style, contrast raglan long sleeve, three-button
              henley placket, light weight & soft fabric for breathable and
              comfortable wearing. And Solid stitched shirts with round neck
              made for durability and a great fit for casual fashion wear and
              diehard baseball fans. The Henley style round neckline includes a
              three-button placket.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <div className="w-full flex flex-col gap-5 p-5 bg-white rounded-md">
            <h3 className="text-base md:text-lg font-bold">Add to Cart</h3>
            {isAdded ? (
              <>
                <Counter />
                <Button
                  type="button"
                  title="remove from cart"
                  style="secondary"
                  isFull
                  onClick={() => console.log()}
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
                onClick={() => console.log()}
              >
                <div className="flex flex-row items-center gap-2">
                  <MdOutlineAddShoppingCart />
                  <p>Add</p>
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

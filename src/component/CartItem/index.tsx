import { Counter } from '@/component/UI';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const CartItem = () => {
  return (
    <div className="flex flex-row gap-10 p-4 bg-white rounded-md">
      <div className="w-2/12 md:p-6 bg-white rounded-md">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          className="w-full h-full max-h-20"
        />
      </div>
      <div className="w-10/12 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
          <span className="font-bold">$20.30</span>
        </div>
        <div className="flex flex-row items-center gap-5 w-full max-w-[160px] ml-auto">
          <button type="button">
            <HiOutlineTrash
              className="text-slate-400 hover:text-red-400"
              size={22}
            />
          </button>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);

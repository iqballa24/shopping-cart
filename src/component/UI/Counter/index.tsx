import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Counter: React.FC<{
  value: number;
  increaseHandler: () => void;
  decreaseHandler: () => void;
}> = ({ value, increaseHandler, decreaseHandler }) => {
  const incrementCounter = () => {
    increaseHandler();
  };

  const decrementCounter = () => {
    decreaseHandler();
  };

  return (
    <div className="flex flex-row justify-between items-center gap-3 w-full border border-text/20 p-1 rounded">
      <button
        type="button"
        className="text-primary cursor-pointer p-2 hover:bg-background rounded-md"
        onClick={decrementCounter}
      >
        <AiOutlineMinus />
      </button>
      <p className="text-base font-bold">{value}</p>
      <button
        type="button"
        className="text-primary cursor-pointer p-2 hover:bg-background rounded-md"
        onClick={incrementCounter}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default React.memo(Counter);

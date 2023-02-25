import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => (prev === 1 ? 1 : prev - 1));
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
      <p className="text-base font-bold">{counter}</p>
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

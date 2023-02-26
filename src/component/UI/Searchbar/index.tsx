import React, { KeyboardEvent } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

type Props = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterHandler: () => void;
};

const Searchbar: React.FC<Props> = ({ changeHandler, enterHandler }) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      enterHandler();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border py-2 px-4 rounded-md text-base placeholder:text-base outline-primary w-full lg:min-w-[300px]"
        placeholder="Search product"
        onChange={changeHandler}
        onKeyDown={onKeyDown}
      />
      <MdOutlineSearch className="absolute right-3 top-3 text-text" />
    </div>
  );
};

export default React.memo(Searchbar);

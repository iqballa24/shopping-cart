import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

const Searchbar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border py-2 px-4 rounded-md text-base placeholder:text-base outline-primary w-full lg:min-w-[400px]"
        placeholder="Search product"
      />
      <MdOutlineSearch className="absolute right-3 top-3 text-text" />
    </div>
  );
};

export default React.memo(Searchbar);

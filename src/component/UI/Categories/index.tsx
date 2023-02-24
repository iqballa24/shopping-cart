import React from 'react';
import { BiCategory } from 'react-icons/bi';

const Categories = () => {
  return (
    <div className='flex flex-row gap-2 items-center cursor-pointer hover:text-primary'>
      <BiCategory size={20}/>
      <span className='text-sm hidden md:block'>Categories</span>
    </div>
  );
};

export default Categories;

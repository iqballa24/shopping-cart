import React from 'react';
import ListProduct from '@/component/ListProduct';
import categories from '@/constant/categories';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { ItemProduct } from '@/types';
import { TitleText } from '@/component/UI';
import { productSliceAction } from '@/store/products';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.product);

  const POPULAR_PRODUCTS = [...data];

  POPULAR_PRODUCTS.sort(
    (a: ItemProduct, b: ItemProduct) => b.rating.count - a.rating.count
  );

  const clickCategoryHandler = (category: string) => {
    dispatch(productSliceAction.setCategory(category));
    navigate('/store');
  };

  return (
    <section className="flex flex-col p-5 gap-10">
      <TitleText text="Category" />
      <ul className="flex flex-row gap-5 flex-wrap">
        {categories.map((category) => (
          <li
            key={category.id}
            className="w-fit bg-white border p-3 md:py-5 md:px-10 rounded-md flex flex-row items-center gap-3 hover:border-primary cursor-pointer"
            onClick={() => clickCategoryHandler(category.value)}
          >
            <category.icon />
            <span className="whitespace-nowrap ">{category.label}</span>
          </li>
        ))}
      </ul>
      <ListProduct
        title="Popular"
        products={POPULAR_PRODUCTS.slice(0, 6)}
        isLoading={isLoading}
      />
    </section>
  );
};

export default Home;

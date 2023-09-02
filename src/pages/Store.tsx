import React, { useEffect, useState } from 'react';

import categories from '@/constant/categories';
import ListProduct from '@/component/ListProduct';
import { Tabsbar } from '@/component/UI';
import { useAppSelector } from '@/lib/hooks/useRedux';
import { ItemProduct } from '@/types';

const Store = () => {
  const { data, isLoading, filter, category } = useAppSelector(
    (state) => state.product
  );
  const [checked, setChecked] = useState(category === '' ? 'all' : category);

  useEffect(() => {
    setChecked(category === '' ? 'all' : category);
  }, [category]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  const products =
    checked === 'all'
      ? data
      : data.filter((item: ItemProduct) => item.category === checked);

  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="flex flex-col md:flex-row max-w-7xl gap-8 p-5 justify-between mx-auto">
      <aside className="w-full md:w-2/12">
        <Tabsbar tabs={categories} onChange={changeHandler} checked={checked} />
      </aside>
      <aside className="w-full md:w-10/12">
        <ListProduct
          title={checked}
          products={filterProduct}
          isLoading={isLoading}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
        />
        {filter !== '' && filterProduct.length == 0 && (
          <div className="text text-col text-center space-y-3">
            <h3 className="text-lg font-semibold">
              No products found with{' '}
              <span className="font-bold text-primary">{filter}</span>
            </h3>
            <p>Try another keyword</p>
          </div>
        )}
      </aside>
    </section>
  );
};

export default Store;

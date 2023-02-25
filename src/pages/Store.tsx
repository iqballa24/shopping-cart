import React from 'react';

import { Tabsbar } from '@/component/UI';
import categories from '@/constant/categories';
import ListProduct from '@/component/ListProduct';

const Store = () => {
  const PRODUCTS = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: false,
      totalSold: 230,
    },
    {
      id: 2,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
    {
      id: 3,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
    {
      id: 3,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
    {
      id: 4,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
    {
      id: 5,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
    {
      id: 6,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 22.3,
      rating: 4.2,
      isAddToCart: true,
      totalSold: 230,
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 p-5 justify-between mx-auto">
      <aside className="w-full md:w-2/12">
        <Tabsbar tabs={categories} />
      </aside>
      <aside className="w-full md:w-10/12">
        <ListProduct title="Electronics" products={PRODUCTS} />
      </aside>
    </section>
  );
};

export default Store;

import React from 'react';
import ListProduct from '@/component/ListProduct';

const Home = () => {
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
  ];

  return (
    <section className="flex flex-col p-5">
      <div className="w-full h-96 bg-gray-300 rounded-md"></div>
      <div className="flex flex-col gap-10 mt-10 px-5">
        <ListProduct title="Electronics" products={PRODUCTS} />
        <ListProduct title="Electronics" products={PRODUCTS} />
      </div>
    </section>
  );
};

export default Home;

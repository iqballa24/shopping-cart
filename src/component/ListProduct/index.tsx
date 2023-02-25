import React from 'react';
import ProductItem from '@/component/ProductCard';
import TitleText from '@/component/UI/TitleText';
import { Product } from '@/types';

const ListProduct: React.FC<{ title: string; products: Product[] }> = ({
  title,
  products,
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <TitleText text={title} />
      <div className="flex flex-row justify-center items-center md:justify-start flex-wrap gap-3">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            totalSold={product.totalSold}
            isAddToCart={product.isAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ListProduct);

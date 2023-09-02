import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ProductItem from '@/component/ProductCard';
import { TitleText, CardsSkeleton } from '@/component/UI';
import { ItemProduct } from '@/types';

const ListProduct: React.FC<{
  title: string;
  products: ItemProduct[];
  isLoading: boolean;
  className: string;
}> = ({ title, products, isLoading, className }) => {
  return (
    <div className="flex flex-col gap-6">
      {isLoading ? (
        <Skeleton width={300} height={30} />
      ) : (
        <TitleText text={title} />
      )}
      <div className={className}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating.rate}
            totalSold={product.rating.count}
            hasAddToCart={product.hasAddToCart}
          />
        ))}
      </div>
      {isLoading && <CardsSkeleton />}
    </div>
  );
};

export default React.memo(ListProduct);

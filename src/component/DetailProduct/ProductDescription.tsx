import { Tag } from '@/component/UI';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';

type Props = {
  isLoading: boolean;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
  price: number;
  category: string;
  description: string;
};

const ProductDescription = (props: Props) => {
  const { isLoading, title, rating, price, category, description } = props;

  return (
    <div className="w-full lg:w-6/12 flex flex-col gap-5">
      <div className="border-b pb-10 border-text/30">
        {isLoading ? (
          <Skeleton height={40} />
        ) : (
          <h2 className="text-xl md:text-2xl font-bold leading-8">{title}</h2>
        )}
        {isLoading ? (
          <Skeleton count={2} width={80} />
        ) : (
          <div className="flex flex-row items-center gap-2 divide-x divide-text pt-3 mb-8">
            <div className="flex flex-row gap-1 items-center">
              <AiFillStar color="#ffc400" /><p>{rating.rate}</p>
            </div>
            <p className='pl-2'>{rating.count} Sold</p>
          </div>
        )}
        {isLoading ? (
          <Skeleton width={100} />
        ) : (
          <div className="font-bold text-4xl">${price}</div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        {isLoading ? <Skeleton /> : <Tag text={category} />}
        {isLoading ? <Skeleton height={200} /> : <p>{description}</p>}
      </div>
    </div>
  );
};

export default ProductDescription;

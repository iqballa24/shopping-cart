import React from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
  isLoading: boolean;
  image: string;
};

const ProductImg = ({ isLoading, image }: Props) => {
  if (isLoading)
    return (
      <div className="w-full lg:w-3/12 h-fit">
        <Skeleton height={400} />
      </div>
    );

  return (
    <div className="w-full lg:w-3/12 h-fit p-10 bg-white ">
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

export default ProductImg;

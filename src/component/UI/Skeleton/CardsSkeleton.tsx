import React, { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
  return <span style={{ marginRight: '0.5rem' }}>{children}</span>;
}

const CardsSkeleton = () => {
  return (
    <Skeleton
      height={300}
      count={5}
      wrapper={InlineWrapperWithMargin}
      containerClassName="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-3"
      inline
    />
  );
};

export default CardsSkeleton;

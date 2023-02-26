import React, { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
  return <span style={{ marginRight: '0.5rem' }}>{children}</span>;
}

const CardsSkeleton = () => {
  return (
    <Skeleton
      width={220}
      height={300}
      count={6}
      wrapper={InlineWrapperWithMargin}
      inline
    />
  );
};

export default CardsSkeleton;

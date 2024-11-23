import React from 'react';
import { Skeleton } from '@chakra-ui/react';

type PropsTypeSkeleton = {
  counter: number;
  loading: boolean;
};

const SkeletonContent = ({ counter, loading }: PropsTypeSkeleton) => {
  if (!loading) {
    return <></>;
  }
  return (
    <div>
      <Skeleton
        flex="1"
        height="5"
        variant="pulse"
        loading={loading}
        marginTop={'10px'}
      />
      <Skeleton
        flex="1"
        height="5"
        variant="pulse"
        loading={loading}
        marginTop={'10px'}
      />
      <Skeleton
        flex="1"
        height="5"
        variant="pulse"
        loading={loading}
        marginTop={'10px'}
      />
    </div>
  );
};

export default SkeletonContent;

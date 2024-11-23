import React, { ReactElement, ReactHTMLElement, useRef } from 'react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../ui/pagination';
import { HStack } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/storeHook';
import { setPage } from '../../../store/sliceJobs/sliceJobs';
import { PageChangeDetails } from '@zag-js/pagination';

type PropsTypePagination = {
  count: number;
  pageSize: number;
  defaultPage: number;
  size?: number;
};

const Pagination = ({
  count,
  defaultPage,
  pageSize,
  size = 1,
}: PropsTypePagination) => {
  const dispatch = useAppDispatch();

  const handlePagination = ({ page }: PageChangeDetails) => {
    dispatch(setPage(page));
  };

  return (
    <PaginationRoot
      count={count}
      pageSize={pageSize}
      defaultPage={defaultPage}
      marginTop={'20px'}
      onPageChange={handlePagination}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;

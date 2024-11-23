import React, { useEffect } from 'react';
import Header from '../Header/Header';
import ListJobs from '../ListJobs/ListJobs';
import { Spinner } from '@chakra-ui/react';
import { useAppSelector } from '../../../hooks/storeHook';
import { toaster, Toaster } from '../../ui/toaster';

const Layout = () => {
  const { isLoading, error, isSuccess } = useAppSelector(
    (state) => state.sliceJobs
  );

  useEffect(() => {
    console.log(error);

    if (error !== null) {
      toaster.create({
        type: 'error',
        title: error.status,
        description: error.message,
      });
    }
    if (isSuccess?.status) {
      toaster.create({
        type: 'success',
        title: '',
        description: isSuccess.message,
      });
    }
  }, [error, isSuccess]);

  return (
    <>
      <Header />
      <ListJobs />
      {isLoading ? (
        <Spinner
          size="xl"
          position={'fixed'}
          bottom={'20px'}
          right={'20px'}
        />
      ) : null}
      <Toaster />
    </>
  );
};

export default Layout;

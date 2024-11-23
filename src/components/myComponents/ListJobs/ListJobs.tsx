import React, { useEffect, useState } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import ToolBar from '../ToolBar/ToolBar';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHook';
import {
  getListJob,
  setListJobsSlice,
} from '../../../store/sliceJobs/sliceJobs';
import Pagination from '../Pagination/Pagination';
import TableJobs from './TableJobs/TableJobs';
import ActionBar from '../ActionBar/ActionBar';
import SkeletonContent from '../Skeleton/SkeletonContent';
import Modal from '../Modal/Modal';
import FormJob from '../FormJob/FormJob';

const ListJobs = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selection, setSelection] = useState<string>('');
  const { listJobs, page, isLoading, counterJobs } = useAppSelector(
    (state) => state.sliceJobs
  );
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    setSelection('');
    dispatch(setListJobsSlice({ listJobs: [], counterJobs: 0 }));
    dispatch(getListJob(page));
  }, [page]);

  return (
    <Container p={'20px 20px'}>
      <ToolBar
        handleOpenModal={handleOpenModal}
        selection={selection}
      />
      <Stack
        width="full"
        gap="5"
      >
        <Heading size="xl">Vacancy Paralect</Heading>
        <TableJobs
          listJobs={listJobs}
          selection={selection}
          setSelection={setSelection}
        />
        {!listJobs.length && !isLoading ? (
          <Heading textAlign={'center'}>Список пуст</Heading>
        ) : null}
        <ActionBar
          hasSelection={selection}
          setSelection={setSelection}
          setOpenModal={setOpenModal}
        />
      </Stack>
      {!listJobs.length ? (
        <SkeletonContent
          counter={4}
          loading={isLoading}
        />
      ) : null}
      <Pagination
        count={counterJobs}
        defaultPage={1}
        pageSize={4}
      />
      <Modal
        openModal={openModal}
        handleOpenModal={handleOpenModal}
      >
        <FormJob
          title={selection === '' ? 'Добавить отклик' : 'Редактировать'}
          formStateEdit={
            selection !== ''
              ? listJobs.find((job) => job._id === selection)
              : {}
          }
        />
      </Modal>
    </Container>
  );
};

export default ListJobs;

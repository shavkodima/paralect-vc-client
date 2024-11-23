import React, { Dispatch, SetStateAction } from 'react';
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSeparator,
  Button,
  Kbd,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHook';
import { deleteListJob, getListJob } from '../../../store/sliceJobs/sliceJobs';

type PropsTypeActionBar = {
  hasSelection: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSelection: Dispatch<SetStateAction<string>>;
};

const ActionBar = ({
  hasSelection,
  setOpenModal,
  setSelection,
}: PropsTypeActionBar) => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.sliceJobs);

  const handleDeleteJob = async () => {
    setSelection('');
    await dispatch(deleteListJob(hasSelection));
    await dispatch(getListJob(page));
  };

  return (
    <ActionBarRoot open={hasSelection !== ''}>
      <ActionBarContent>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDeleteJob}
          bg={'#fff500'}
          color={'#111'}
        >
          Удалить{' '}
          <Kbd
            bg={'#111'}
            border={'0px'}
            color={'#fff'}
          >
            D
          </Kbd>
        </Button>
        <ActionBarSeparator />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpenModal((prev) => !prev)}
          bg={'#fff500'}
          color={'#111'}
        >
          Изменить{' '}
          <Kbd
            bg={'#111'}
            border={'0px'}
            color={'#fff'}
          >
            T
          </Kbd>
        </Button>
      </ActionBarContent>
    </ActionBarRoot>
  );
};

export default ActionBar;

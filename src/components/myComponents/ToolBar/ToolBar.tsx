import { Button, Flex, Kbd } from '@chakra-ui/react';
import React from 'react';

type PropsTypeToolBar = {
  handleOpenModal: () => void;
  selection: string;
};

const ToolBar = ({ handleOpenModal, selection }: PropsTypeToolBar) => {
  return (
    <Flex justify={'flex-end'}>
      {selection === '' ? (
        <Button
          title="Добавить отклик"
          position={'right'}
          onClick={handleOpenModal}
          bg={'#fff500'}
          color={'#111'}
        >
          +
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={handleOpenModal}
          bg={'#fff500'}
          color={'#111'}
        >
          Изменить
          <Kbd
            bg={'#111'}
            border={'0px'}
            color={'#fff'}
          >
            T
          </Kbd>
        </Button>
      )}
    </Flex>
  );
};

export default ToolBar;

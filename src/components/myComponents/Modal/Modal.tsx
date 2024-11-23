import { Box, Button, Container, Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type propsTypeModal = {
  openModal: boolean;
  handleOpenModal: () => void;
  children: ReactNode;
};

const Modal = ({ openModal, handleOpenModal, children }: propsTypeModal) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    handleOpenModal();
  };

  return openModal ? (
    <Box
      bg={'#333333a3'}
      position={'fixed'}
      w={'100vw'}
      h={'100vh'}
      top={'0px'}
      left={'0px'}
      zIndex={'99999'}
      onClick={handleCloseModal}
    >
      <Flex
        h={'100%'}
        align={'center'}
      >
        <Container
          p={'20px'}
          maxW={'600px'}
          w={'100%'}
          bg={'#fff'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Container>
      </Flex>
      <Button
        position={'fixed'}
        top={'20px'}
        right={'20px'}
        bg={'#fff500'}
        color={'#111'}
      >
        X
      </Button>
    </Box>
  ) : null;
};

export default Modal;

import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box bgColor="#000">
      <Container p={'30px 20px'}>
        <Heading color="#fff">Vacancy Paralect</Heading>
      </Container>
    </Box>
  );
};

export default Header;

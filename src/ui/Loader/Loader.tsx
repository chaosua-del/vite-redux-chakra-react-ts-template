import { Flex, Spinner } from '@chakra-ui/react';

import { Container } from '../Container';

export const Loader = () => {
  return (
    <Container>
      <Flex
        width="100%"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Flex>
    </Container>
  );
};

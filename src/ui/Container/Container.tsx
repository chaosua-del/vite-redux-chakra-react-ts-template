import { Container as ChakraContainer, type ContainerProps } from '@chakra-ui/react';

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ChakraContainer
      maxWidth={{
        md: '1750px',
        base: '100%',
      }}
      paddingX={{
        lg: '45px',
        md: '15px',
        base: '15px',
      }}
      {...props}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;

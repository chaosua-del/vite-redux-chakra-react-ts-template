import { Button as ChakraButton } from '@chakra-ui/react';

import { styles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <ChakraButton borderRadius="24px" {...styles[variant]} {...props}>
      {children}
    </ChakraButton>
  );
};

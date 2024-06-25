import { Text } from '@chakra-ui/react';

import { styles } from './Title.styles';
import type { TitleProps } from './Title.types';

export const Title = ({ children, variant, ...props }: TitleProps) => {
  return (
    <Text fontWeight="700" color="primary.text" {...styles[variant]} {...props}>
      {children}
    </Text>
  );
};

import { Text } from '@chakra-ui/react';

import { styles } from './Subtitle.styles';
import type { SubtitleProps } from './Subtitle.types';

export const Subtitle = ({ children, variant, ...props }: SubtitleProps) => {
  return (
    <Text color="primary.text" {...styles[variant]} {...props}>
      {children}
    </Text>
  );
};

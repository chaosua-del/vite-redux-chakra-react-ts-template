import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: 'white',
    color: 'primary.text',
    padding: {
      base: '25px',
      md: '50px',
    },
  },
});

export const CardTheme = defineMultiStyleConfig({ baseStyle });

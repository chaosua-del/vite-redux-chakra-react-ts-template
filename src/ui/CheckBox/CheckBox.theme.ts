import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  control: {
    width: '20px',
    height: '20px',
    borderColor: '#FD890A',
    _checked: {
      background: 'transparent',
      borderColor: '#FD890A',
      _hover: {
        backgroundColor: 'transparent',
        borderColor: '#FD890A',
      },
    },
  },

  icon: {
    color: '#FD890A',
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });

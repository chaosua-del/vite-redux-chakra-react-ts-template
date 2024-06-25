/* eslint-disable @typescript-eslint/unbound-method */

import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: '12px',
    fontWeight: 'normal',
    fontSize: '14px',
    color: 'primary.text',
    caretColor: '#15C0AC',

    _placeholder: {
      color: 'darkGray.300',
    },

    _invalid: {
      caretColor: '#EE3148',
    },
  },
  element: {
    height: '100%',
  },
});

const variantOutline = definePartsStyle({
  field: {
    bg: 'transparent',
    borderColor: 'gray',
    color: 'black',

    _focus: {
      borderColor: 'background',
      boxShadow: 'none',
    },

    _hover: {
      borderColor: 'background',
      boxShadow: 'none',
    },

    _invalid: {
      borderColor: 'red',
      boxShadow: 'none',

      _hover: {
        borderColor: 'red',
      },

      _focus: {
        borderColor: 'red',
        boxShadow: 'none',
      },

      _disabled: {
        borderColor: 'gray',
      },
    },

    _disabled: {
      bg: 'lightGray',
      opacity: 1,
      color: 'darkGray.200',

      _hover: {
        borderColor: 'gray',
      },
    },
  },
});

export const InputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline,
  },
  defaultProps: {
    variant: 'outline',
  },
});

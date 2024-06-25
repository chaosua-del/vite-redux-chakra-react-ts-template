/* eslint-disable @typescript-eslint/unbound-method */

import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  selectAnatomy.keys
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
    borderRadius: '8px',
    bg: 'rgba(225, 223, 204, 0.5)',
    borderColor: '#959485',
    color: 'black',
    backgroundColor: 'sectionBackground',

    _focus: {
      borderColor: '#959485',
      boxShadow: 'none',
    },

    _hover: {
      borderColor: '#959485',
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
        opacity: 0.5,
      },
    },

    _disabled: {
      bg: 'transparent',
      opacity: 1,
      color: 'darkGray',

      _hover: {
        borderColor: '#959485',
      },
    },
  },
});

export const SelectTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline,
  },
  defaultProps: {
    variant: 'outline',
  },
});

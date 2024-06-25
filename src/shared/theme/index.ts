'use client';

import { Checkbox, extendTheme } from '@chakra-ui/react';

import { CardTheme } from '@/ui/Card/Card.theme';
import { checkboxTheme } from '@/ui/CheckBox/CheckBox.theme';
import { InputTheme } from '@/ui/Input/Input.theme';
import { SelectTheme } from '@/ui/Select/Select.theme';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { shadows } from './shadows';
import { styles } from './styles';

export const theme = extendTheme({
  fonts,
  semanticTokens: {
    colors,
  },
  styles,
  shadows,
  breakpoints,
  components: {
    Card: CardTheme,
    Input: InputTheme,
    Checkbox: checkboxTheme,
    Select: SelectTheme,
  },
});

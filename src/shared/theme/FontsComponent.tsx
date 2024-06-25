import React from 'react';
import { Global } from '@emotion/react';

export const FontsComponent = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'eUkraine';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./src/assets/fonts/e-Ukraine-Regular.otf') format('otf'), url('./src/assets/fonts/e-Ukraine-Regular.woff') format('woff'), url('./src/assets/fonts/e-Ukraine-Regular.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'eUkraine';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('./src/assets/fonts/e-Ukraine-Bold.otf') format('otf'), url('./src/assets/fonts/e-Ukraine-Bold.woff') format('woff'), url('./src/assets/fonts/e-Ukraine-Bold.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

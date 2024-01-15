'use client';

// import { createTheme } from '@mantine/core';
import { Container, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xs: rem(400),
  md: rem(600),
  lg: rem(1140),
};

export const theme = createTheme({
  /* Put your mantine theme override here */

  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },

  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },

  colors: {
    // Add your color
    black: ['#1E1E1EAB', '#C1CCF6', '#000000', '', '', '', '', '', '', ''],
    blue: ['#6EC3FD4D', '#5DA7DA4D', '#5d8fda', '#5da7da', '#5DA7DA42', '#4470B2', '', '', '', ''],
    violet: ['#3B30894D', '#3b3089', '#3B3089E5', '', '', '', '', '', '', ''],
    white: ['#ffffff', '', '', '', '', '', '', '', '', ''],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: "'Outfit', sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
      h2: { fontSize: rem(34) },
      h3: { fontSize: rem(30) },
    },
  },

  fontSizes: {
    fs_12: rem(12),
    fs_14: rem(14),
    fs_16: rem(16),
    fs_20: rem(20),
    fs_24: rem(24),
    fs_30: rem(30),
    fs_50: rem(50),
    normal: 'normal',
    title_30: rem(30),
    title_20: rem(20),
    desc_16: rem(16),
    text_20: rem(20),
  },

  other: {
    fontWeights: {
      fw_300: 300,
      normal: 400,
      bold: 700,
    },

    marginTop: {
      marginTop_20: rem('20'),
      marginTop_60: rem('60'),
      marginTop_35: rem('35'),
      marginTop_40: rem('35'),
      marginTop_125: rem('125'),
      marginTop_230: rem('230'),
    },
    borderRadius: {
      borderRadius_10: '10px',
      borderRadius_389: '389px',
      borderRadius_circle: '50%',
    },
    borderColor: {
      borderColor_0: '#5D8FDA',
    },
    fillter: {
      blur_100: 'blur(100px)',
    },
    gap: {
      gap_6: rem('6px'),
      gap_10: rem('10px'),
      gap_20: rem('20px'),
      gap_30: rem('30px'),
      gap_40: rem('gap_40'),
    },
  },
});

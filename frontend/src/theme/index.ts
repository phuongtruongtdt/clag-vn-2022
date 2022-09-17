import { createTheme } from '@mui/material/styles';
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme';

// Custom theme: Colors
const themeColors = {
  color: {
    primary: '#1b7357',
    secondary: '#212121',
    black: '#000',
    white: '#fff',
    grey: '#9d9d9d',
    grey_100: '#fafafa',
    yellow: '#f8d377',
    green_bold: '#145a44',
    green_light: '#e8f1ee',
    green_neon: '27feba',
  },
} as const;

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 24,
    h1: {
      fontSize: 96,
      fontWeight: 700,
      color: themeColors.color.secondary,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      color: themeColors.color.secondary,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      color: themeColors.color.white,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
      color: themeColors.color.secondary,
    },
    h5: {
      color: themeColors.color.white,
      fontSize: 18,
    },
    h6: {
      color: themeColors.color.white,
      fontSize: 16,
      fontWeight: 200,
    },
    body1: {
      color: themeColors.color.grey,
      fontSize: 20,
      fontWeight: 600,
    },
    body2: {
      color: themeColors.color.black,
      fontSize: 18,
      fontWeight: 400,
    },
    subtitle1: {
      color: themeColors.color.white,
      fontSize: 23,
      fontWeight: 500,
    },
    // subtitle2: {
    //   color: themeColors.color.white,
    //   fontSize: 16,
    //   fontWeight: 600,
    // },
  },
};

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: typeof themeColors[Key];
};
declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...themeColors, ...themeOptions });

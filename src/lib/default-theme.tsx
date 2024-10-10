import { createTheme } from '@mui/material'

export const themeColors = {
  background: '#f2f2f7',
  white: '#ffffff',
  black: '#08080a',
  gray: {
    dark: '#86868a',
    main: '#d2d2d5',
    light: '#e5e5ea',
  },
  brand: {
    // -- Core --
    plum: '#33143d',
    violet: '#7d00b0',
    lilac: '#c387ff',
    yolk: '#ffc95a',
    rhubarb: '#ff6a6a',

    // -- Blush --
    paper: '#fff5eb',
    rose: '#ffeff9',
    stone: '#ebebfa',

    // -- Pinch --
    lime: '#a0d787',
    sky: '#84cfdb',
    pine: '#277c72',
    marine: '#003c6e',
  },
}

export const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#EEF0F2',
      paper: '#ffffff',
    },
    text: {
      primary: '#3b3b3b', // Matches prefers-color-scheme: light text color
      secondary: '#002D04', // Optional: matches the initial primary text color
    },
    primary: {
      light: '#FAFAFF', // 300
      main: '#002D04', // 500
      dark: '#A38D5A', // 900
      contrastText: '#fafaff',
    },
    secondary: {
      light: '#FAFAFF',
      main: '#A38D5A',
      dark: '#002D04',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
})

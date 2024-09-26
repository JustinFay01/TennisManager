import { createTheme } from '@mui/material';

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
});

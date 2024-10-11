import { createTheme } from '@mui/material'

export const themeColors = {
  background: {
    main: '#eff4f8',
    light: '#f9f9f9',
    dark: '#1f1f1f',
  },
  green: {
    main: '#315a39',
    light: '#7a9f79',
    dark: '#142c14',
  },
  infoGreen: {
    main: '#006400',
    light: '#96be8c',
    dark: '#2a3c24',
  },
  mutedBlue: {
    main: '#9BC4CB',
    light: '#C0E0DE',
    dark: '#08415C',
  },
  blue: {
    main: '#5fa8d3',
    light: '#89c2d9',
    dark: '#003049',
  },
  red: {
    main: '#ba181b',
    light: '#db504a',
    dark: '#590004',
  },
  orange: {
    main: '#ff6d00',
    light: '#f7b267',
    dark: '#813405',
  },
  purple: {
    main: '#b185db',
    light: '#dec9e9',
    dark: '#3f1f5c',
  },
}

export const defaultTheme = createTheme({
  palette: {
    background: {
      default: themeColors.background.main,
      paper: themeColors.background.light,
    },
    primary: {
      main: themeColors.green.main,
      light: themeColors.green.light,
      dark: themeColors.green.dark,
    },
    secondary: {
      main: themeColors.mutedBlue.main,
      light: themeColors.mutedBlue.light,
      dark: themeColors.mutedBlue.dark,
    },
    error: {
      main: themeColors.red.main,
      light: themeColors.red.light,
      dark: themeColors.red.dark,
    },
    warning: {
      main: themeColors.orange.main,
      light: themeColors.orange.light,
      dark: themeColors.orange.dark,
    },
    info: {
      main: themeColors.infoGreen.main,
      light: themeColors.infoGreen.light,
      dark: themeColors.infoGreen.dark,
    },
    success: {
      main: themeColors.purple.main,
      light: themeColors.purple.light,
      dark: themeColors.purple.dark,
    },
    text: {
      primary: themeColors.green.dark,
      secondary: themeColors.mutedBlue.dark,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '.875rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow:
            '-10px -10px 10px rgba(255, 255, 255, .0), 12px 12px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
})

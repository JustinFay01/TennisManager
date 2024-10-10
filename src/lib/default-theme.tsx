import { createTheme } from '@mui/material'

export const themeColors = {
  background: '#f2f2f7',
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
  },
})

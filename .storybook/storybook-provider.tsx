import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { defaultTheme } from '../src/lib/default-theme'

export const StorybookProvider = (props: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </MemoryRouter>
  )
}

import React from 'react'
import { ButtonBase, Link as MuiLink } from '@mui/material'
import { useTheme } from '@mui/material/styles'

type NavLinkProps = React.ComponentProps<typeof MuiLink>

export const NavLink = ({ href, title, children }: NavLinkProps) => {
  const theme = useTheme()

  return (
    <ButtonBase
      TouchRippleProps={{ style: { color: theme.palette.secondary.main } }}
    >
      <MuiLink
        href={href}
        aria-label={title ?? 'Navigation Item'}
        sx={{
          textDecoration: 'none',
          '&:hover': {
            color: theme.palette.primary.dark,
            textDecoration: 'none',
          },
        }}
      >
        {children}
      </MuiLink>
    </ButtonBase>
  )
}

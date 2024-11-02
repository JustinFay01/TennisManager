import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material'
import { IconNavItem, RowNavItem } from './components/nav-item'
import { FlexColumn } from '@/components/ui/layout/flexbox'
import { useState } from 'react'

const RowNav = () => {
  return (
    <>
      <RowNavItem
        href={'/app'}
        title={<Typography variant="body1">Dashboard</Typography>}
        icon={
          <SpaceDashboardOutlinedIcon
            sx={{
              fontSize: '1.5rem',
            }}
          />
        }
      />
    </>
  )
}

const IconNav = () => {
  return (
    <>
      <IconNavItem
        href={'/app'}
        icon={
          <SpaceDashboardOutlinedIcon
            sx={{
              fontSize: '1.5rem',
            }}
          />
        }
      />
    </>
  )
}

export const MainNav = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))

  const [currNav, setCurrNav] = useState('dashboard')

  return (
    <Card
      sx={{
        width: { xs: 0, sm: 75, md: 240 },
        transition: 'width 0.3s',
        height: '100vh',
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <FlexColumn
        sx={{
          padding: 2,
        }}
      >
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <Typography variant="h6">Future Icon</Typography>
        </Box>
        {isSm ? <IconNav /> : <RowNav />}
      </FlexColumn>
    </Card>
  )
}

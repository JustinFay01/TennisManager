import { FlexColumn, FlexSpacer } from '@/components/ui/layout/flexbox'
import { Button, Card, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { NavItem } from './components/nav-item'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'

export const MainNav = () => {
  // const [navWidth, setNavWidth] = useState(0)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsClosed(window.innerWidth < 768)
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])

  return (
    <Card
      sx={{
        width: { xs: 0, sm: 120, md: 240 },
        transition: 'width 0.3s',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <FlexColumn sx={{ padding: 2, height: '100%' }}>
        <NavItem
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
        <FlexSpacer />
        <Button
          onClick={() => setIsClosed(!closed)}
          sx={{ width: '100%', justifyContent: 'flex-start' }}
        >
          <Typography variant="body1">Close</Typography>
        </Button>
      </FlexColumn>
    </Card>
  )
}

import { FlexRow } from '@/components/ui/layout/flexbox'
import { WithChildren, WithChildrenAndSx } from '@/types/props'
import { Box, Drawer } from '@mui/material'
import { LayoutContainer, Main } from './container'
import { MainNav } from './main-nav/main-nav'

type SideNavProps = {
  width?: number
} & WithChildrenAndSx

const SideNav = ({ children, sx, width = 80 }: SideNavProps) => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width,
          flexShrink: 0,
          ...sx,
        }}
      >
        <Box width={width} sx={{ mt: 4 }}>
          {children}
        </Box>
      </Drawer>
    </>
  )
}

export const LayoutColumns = ({ children }: WithChildren) => {
  return <FlexRow sx={{ flex: '1 1 100%' }}>{children}</FlexRow>
}

export const AppLayout = ({ children }: WithChildren) => {
  return (
    <LayoutContainer>
      <LayoutColumns>
        <SideNav>
          <MainNav />
        </SideNav>
        <Main>{children}</Main>
      </LayoutColumns>
    </LayoutContainer>
  )
}

import Box from '@mui/material/Box'
import { Stack } from '@mui/material'
import { WithChildren, WithChildrenAndSx } from '@/types/props'

export const LayoutContainer = (props: WithChildren) => {
  const { children } = props
  return (
    <Stack direction="column" alignItems="stretch" sx={{ minHeight: '100vh' }}>
      {children}
    </Stack>
  )
}

export const Main = ({ children, sx }: WithChildrenAndSx) => (
  <Box component="main" flex="1 1 auto" sx={{ ...sx }}>
    {children}
  </Box>
)

import { FlexRow } from '@/components/ui/layout/flexbox'
import { WithChildren } from '@/types/props'
import { Main } from './container'
import { MainNav } from './main-nav/main-nav'

export const LayoutColumns = ({ children }: WithChildren) => {
  return <FlexRow sx={{ flex: '1 1 100%' }}>{children}</FlexRow>
}

export const AppLayout = ({ children }: WithChildren) => {
  return (
    <FlexRow sx={{ flex: '1 1 100%', padding: 2, minHeight: '100vh' }}>
      <LayoutColumns>
        <MainNav />
        <Main
          sx={{
            flex: '1 1 auto',
            overflow: 'auto',
            padding: 2,
          }}
        >
          {children}
        </Main>
      </LayoutColumns>
    </FlexRow>
  )
}

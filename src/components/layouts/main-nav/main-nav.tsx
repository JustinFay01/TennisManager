import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import { FlexColumn, FlexRow } from '@/components/ui/layout/flexbox'
import { NavLink } from '@/components/ui/nav-link'
import { WithChildrenAndSx } from '@/types/props'
import { Card, Link } from '@mui/material'

interface NavItemProps extends WithChildrenAndSx {
  href: string
  title?: string
}

const StackedNavItem = ({ children, title, href, sx }: NavItemProps) => {
  return (
    <NavLink href={href} aria-label={title ?? 'Navigation Item'}>
      <FlexColumn
        sx={{
          alignItems: 'center',
          ...sx,
        }}
      >
        {children}
        {title && <span className="nav-title">{title}</span>}
      </FlexColumn>
    </NavLink>
  )
}

const RowNavItem = ({ title, href }: NavItemProps) => {
  return (
    <FlexRow>
      <Link href={href}></Link>
    </FlexRow>
  )
}

export const FloatingNav = () => {
  return (
    <Card>
      <FlexColumn>
        <StackedNavItem href={'/app'} title="Home">
          <HomeIcon fontSize="large" />
        </StackedNavItem>
        <StackedNavItem href={'/app/customers'} title="Customers">
          <GroupIcon fontSize="large" />
        </StackedNavItem>
        <StackedNavItem href={'/app/schedule'} title="Schedule">
          <SportsTennisIcon fontSize="large" />
        </StackedNavItem>
      </FlexColumn>
    </Card>
  )
}

export const MainNav = () => {
  return (
    <FlexColumn
      sx={{
        gap: 2,
      }}
    >
      <StackedNavItem href={'/app'} subtitle="Home">
        <HomeIcon fontSize="large" />
      </StackedNavItem>
      <StackedNavItem href={'/app/customers'} subtitle="Customers">
        <GroupIcon fontSize="large" />
      </StackedNavItem>
      <StackedNavItem href={'/app/schedule'} subtitle="Schedule">
        <SportsTennisIcon fontSize="large" />
      </StackedNavItem>
    </FlexColumn>
  )
}

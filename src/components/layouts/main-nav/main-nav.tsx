import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import { FlexColumn } from '@/components/ui/layout/flexbox'
import { NavLink } from '@/components/ui/nav-link'
import { WithChildrenAndSx } from '@/types/props'

interface NavItemProps extends WithChildrenAndSx {
  children: React.ReactNode
  href: string
  subtitle?: string
}

const NavItem = ({ children, subtitle, href, sx }: NavItemProps) => {
  return (
    <NavLink href={href} aria-label={subtitle ?? 'Navigation Item'}>
      <FlexColumn
        sx={{
          alignItems: 'center',
          ...sx,
        }}
      >
        {children}
        {subtitle && <span className="nav-subtitle">{subtitle}</span>}
      </FlexColumn>
    </NavLink>
  )
}

export const MainNav = () => {
  return (
    <FlexColumn
      sx={{
        gap: 2,
      }}
    >
      <NavItem href={'/app'} subtitle="Home">
        <HomeIcon fontSize="large" />
      </NavItem>
      <NavItem href={'/app/customers'} subtitle="Customers">
        <GroupIcon fontSize="large" />
      </NavItem>
      <NavItem href={'/app/schedule'} subtitle="Schedule">
        <SportsTennisIcon fontSize="large" />
      </NavItem>
    </FlexColumn>
  )
}

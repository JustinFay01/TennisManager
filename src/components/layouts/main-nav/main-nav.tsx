import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import { FlexColumn } from '@/components/ui/layout/flexbox'
import { WithChildrenAndSx } from '@/components/props'
import { NavLink } from '@/components/ui/nav-link'

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
        spacing: 6,
      }}
    >
      <NavItem href={'/test'} subtitle="Home">
        <HomeIcon fontSize="large" />
      </NavItem>
      <NavItem href={'/test'} subtitle="Customers">
        <GroupIcon fontSize="large" />
      </NavItem>
      <NavItem href={'/test'} subtitle="Sessions">
        <SportsTennisIcon fontSize="large" />
      </NavItem>
    </FlexColumn>
  )
}

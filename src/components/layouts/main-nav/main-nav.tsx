import { FlexColumn, FlexRow } from '@/components/ui/layout/flexbox'
import { NavLink } from '@/components/ui/nav-link'
import { WithChildrenAndSx } from '@/types/props'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis'
import { Card, Link, Typography } from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
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

const RowNavItem = ({ children, href, sx }: NavItemProps) => {
  return (
    <Link
      href={href}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
          textDecoration: 'none',
          color: 'inherit',
        },
        ...sx,
      }}
    >
      <FlexRow
        sx={{
          gap: 1,
          alignItems: 'center',
        }}
      >
        {children}
      </FlexRow>
    </Link>
  )
}

export const FloatingNav = () => {
  return (
    <Card>
      <FlexColumn spacing={3} sx={{ padding: 2 }}>
        <RowNavItem href={'/app'}>
          <DashboardOutlinedIcon fontSize="large" />
          <Typography variant="h4">Home</Typography>
        </RowNavItem>
        <RowNavItem href={'/app/customers'}>
          <GroupOutlinedIcon fontSize="large" />
          <Typography variant="h4">Customers</Typography>
        </RowNavItem>
        <RowNavItem href={'/app/schedule'}>
          <SportsTennisIcon fontSize="large" />
          <Typography variant="h4">Schedule</Typography>
        </RowNavItem>
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
  )
}

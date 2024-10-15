import { WithSx } from '@/types/props'
import { ButtonBase, Link } from '@mui/material'

type RowNavItemProps = {
  href: string
  icon?: React.ReactNode
  title?: React.ReactNode
} & WithSx

export const RowNavItem = ({ href, icon, title }: RowNavItemProps) => {
  return (
    <ButtonBase component={Link} href={href} gap={1}>
      {icon}
      {title}
    </ButtonBase>
  )
}

type IconNavItemProps = {
  href: string
  icon?: React.ReactNode
} & WithSx

export const IconNavItem = ({ href, icon }: IconNavItemProps) => {
  return (
    <ButtonBase component={Link} href={href} gap={1}>
      {icon}
    </ButtonBase>
  )
}

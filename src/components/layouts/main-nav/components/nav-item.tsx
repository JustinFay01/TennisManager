import { FlexRow } from '@/components/ui/layout/flexbox'
import { WithSx } from '@/types/props'
import { ButtonBase, Link } from '@mui/material'

type NavItemProps = {
  href: string
  icon?: React.ReactNode
  title?: React.ReactNode
} & WithSx

export const NavItem = ({ href, icon, title }: NavItemProps) => {
  return (
    <ButtonBase component={Link} href={href} gap={1}>
      {icon}
      {title}
    </ButtonBase>
  )
}

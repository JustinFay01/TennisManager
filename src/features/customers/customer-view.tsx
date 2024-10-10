import { FlexColumn } from '@/components/ui/layout/flexbox'
import { Typography } from '@mui/material'
import { CustomerTable } from './customer-table/customer-table'
import { useAuth0 } from '@auth0/auth0-react'
import { CustomerListItem } from '@/types/api'

export const CustomerView = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <FlexColumn>
      <Typography variant="h3">Customers</Typography>
      <Typography variant="body1">
        This is the customer view. It will contain a list of customers and
        actions that can be performed on them.
      </Typography>

      <CustomerTable customers={[] as CustomerListItem[]} user={user} />
    </FlexColumn>
  )
}

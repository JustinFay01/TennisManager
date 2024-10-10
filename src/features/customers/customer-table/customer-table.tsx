import { FlexRow } from '@/components/ui/layout/flexbox'
import { CustomerListItem } from '@/types/api'
import { User } from '@auth0/auth0-react'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

type CustomerTableProps = {
  customers?: CustomerListItem[]
  user?: User
}

const CustomerTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone Number</TableCell>
        <TableCell>Member #</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}

export const CustomerTable = ({ user, customers }: CustomerTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <CustomerTableHeader />
        <TableBody>
          <TableRow key="1">
            <TableCell>
              <FlexRow
                sx={{
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src={user?.picture}
                  alt="profile"
                  style={{ borderRadius: '50%', height: '40px' }}
                />
                {`${user?.given_name} ${user?.family_name}`}
              </FlexRow>
            </TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.phoneNumber}</TableCell>
            <TableCell>{user?.memberNumber}</TableCell>
            <TableCell>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button variant="contained" color="secondary">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

import AddIcon from '@mui/icons-material/Add'
import {
  Button,
  LinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import DefaultCard from '@/components/base/default-card'

import { useCustomers } from '../../../api/queries/use-customers'
import './customer-list.css'

export default function CustomerList() {
  const customerQuery = useCustomers()

  return (
    <div>
      {customerQuery.isFetched && (
        <div
          style={{
            padding: '1rem',
          }}
        >
          <DefaultCard className="card">
            {customerQuery.isLoading && <LinearProgress color="secondary" />}
            <div className="card-header">
              <Typography
                variant="h2"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Customers
              </Typography>
              <Button variant="contained">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <AddIcon />
                  Add Customer
                </div>
              </Button>
            </div>
            {customerQuery.isError && (
              <Typography variant="h6" color="error">
                Error loading customers
              </Typography>
            )}
            <TableContainer
              style={{
                maxHeight: 'calc(100vh - 150px)',
                overflowY: 'auto',
              }}
            >
              <Table>
                <TableHead className="card-table-header">
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerQuery.data?.items.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>{customer.firstName}</TableCell>
                      <TableCell>{customer.lastName}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phoneNumber}</TableCell>
                      <TableCell>
                        <Button
                          component={Link}
                          href={`/customers/${customer.id}`}
                          variant="outlined"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DefaultCard>
        </div>
      )}
    </div>
  )
}

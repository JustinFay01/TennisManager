import { CustomerView } from '@/features/customers/customer-view'
import { ErrorBoundary } from 'react-error-boundary'

export const Customers = () => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <div role="alert">
          <p>Error in the Customer page!</p>
          <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
      )}
    >
      <CustomerView />
    </ErrorBoundary>
  )
}

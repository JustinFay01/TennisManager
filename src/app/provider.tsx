import { Auth0Wrapper } from '@/lib/auth/auth-wrapper'
import { defaultTheme } from '@/lib/default-theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <div role="alert">
          <p>Something went REALLY wrong | Updated | Twice!:</p>
          <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
      )}
    >
      <Auth0Wrapper>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Auth0Wrapper>
    </ErrorBoundary>
  )
}

export default AppProvider

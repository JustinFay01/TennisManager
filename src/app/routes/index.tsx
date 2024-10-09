import AppProvider from '@/app/provider'
import { AppRouter } from '../router'

export const TmApp = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

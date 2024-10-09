import { MainNav } from './main-nav/main-nav'
import './main-layout.css'

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <MainNav />
      {props.children}
    </>
  )
}

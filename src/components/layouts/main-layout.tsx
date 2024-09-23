import { MainNav } from './main-nav/main-nav';
import './main-layout.css';

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="main">
      <MainNav />
      <main className="main-content">{props.children}</main>
    </div>
  );
};

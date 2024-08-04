import { MainNav } from "./main-nav/main-nav";
import "./main-layout.css";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <MainNav />
      <main className="main">{props.children}</main>
    </div>
  );
};

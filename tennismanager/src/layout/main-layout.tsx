import { MainNav } from "./main-nav/main-nav";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <MainNav />
      {props.children}
    </>
  );
};

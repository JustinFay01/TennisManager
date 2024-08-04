import { MainNav } from "./main-nav/main-nav";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <MainNav />
      <div style={{ marginLeft: "125px", padding: "1rem" }}>
        {props.children}
      </div>
    </>
  );
};

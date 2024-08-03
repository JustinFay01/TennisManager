import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "./layout/main-layout";
import { Outlet } from "react-router-dom";

export const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#F2F2F7",
      paper: "#ffffff",
    },
    text: {
      primary: "#717171",
    },
    primary: {
      light: "#A44DC8", //300
      main: "#7D00B0", //500
      dark: "#4D0087", //900
      contrastText: "#FFF",
    },
    secondary: {
      light: "#FE7E7E",
      main: "#FE4747",
      dark: "#FD2020",
      contrastText: "#FFF",
    },
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

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
      primary: "#808080",
    },
    primary: {
      light: "#FAFAFF", //300
      main: "#A38D5A", //500
      dark: "#002D04", //900
      contrastText: "#000000",
    },
    secondary: {
      light: "#FAFAFF",
      main: "#A38D5A",
      dark: "#002D04",
      contrastText: "#000000",
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

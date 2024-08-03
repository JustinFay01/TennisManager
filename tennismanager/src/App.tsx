import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div>Hello, World!</div>
    </ThemeProvider>
  );
};

export default App;

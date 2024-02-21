import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import MainRouter from "./pages/shared/Router";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <CssBaseline />
          <MainRouter />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

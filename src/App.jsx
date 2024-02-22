import { CssBaseline, ThemeProvider } from "@mui/material";

import MainRouter from "./pages/shared/Router";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <main className="content">
          <div className="app">
            <CssBaseline />
            <MainRouter />
          </div>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

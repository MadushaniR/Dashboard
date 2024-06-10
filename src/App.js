import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/view/Topbar';
import Sidebar from './scenes/view/Sidebar';
import Dashboard from './scenes/dashboard';
import Product from './scenes/product';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isHidden={isSidebarHidden} setIsHidden={setIsSidebarHidden} />
          <main className="content">
            <Topbar setIsHidden={setIsSidebarHidden} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

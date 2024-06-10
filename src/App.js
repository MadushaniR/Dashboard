import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/view/Topbar';
import Sidebar from './scenes/view/Sidebar';
import Dashboard from './scenes/dashboard';
import Product from './scenes/product';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
   
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
    
  );
}

export default App;

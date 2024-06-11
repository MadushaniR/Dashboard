import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './pages/view/Topbar';
import Sidebar from './pages/view/Sidebar';
import Dashboard from './pages/dashboard';
import Product from './pages/product';

function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // Styles for the height
  const sidebarHeight = isSidebarHidden ? 'calc(100vh - 56px)' : '100vh';
  const mainHeight = isSidebarHidden ? 'calc(100vh - 56px)' : '100vh';
  const mainOverflowY = isSidebarHidden ? 'auto' : 'hidden';

  return (
    <div className="app" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex' }}>
      <Sidebar isHidden={isSidebarHidden} setIsHidden={setIsSidebarHidden} style={{ height: sidebarHeight }} />
      <main className="content" style={{ flexGrow: 1, minHeight: mainHeight, overflowY: mainOverflowY, overflowX: 'hidden', paddingBottom: '20px' }}> 
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

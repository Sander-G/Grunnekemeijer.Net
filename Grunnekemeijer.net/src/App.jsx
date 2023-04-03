import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import { MuteProvider } from './context/MuteContext';
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const noScrolling = pathname === '/' || pathname === '/Home' || pathname === 'Info';
    document.body.style.overflow = noScrolling ? 'hidden' : 'auto';
    document.body.style.overscrollBehavior = noScrolling ? 'none' : 'auto';
    document.body.style.position = noScrolling ? 'fixed' : 'static';
    document.body.style.height = noScrolling ? '100vh' : 'auto';
    document.body.style.touchAction = noScrolling ? 'none' : 'auto';
    document.body.style.webkitOverflowScrolling = noScrolling ? 'touch' : 'auto';
  }, [location]);

  return (
    <div className='App'>
      <MuteProvider>
        <GlobalStyle />
        <DarkModeProvider>
          <Navbar />
        </DarkModeProvider>

        <Routes>
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MuteProvider>
    </div>
  );
};

export default App;

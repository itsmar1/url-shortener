import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TheHomePage from './pages/TheHomePage';
import ErrorPage from './pages/ErrorPage';
import ShortenedPage from './pages/ShortenedPage';
import ClickCounter from './pages/ClickCounter';
import TheHeader from './layout/TheHeader';
import TheFooter from './layout/TheFooter';



const App = () => {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path='/' element={<TheHomePage />} />
        <Route path='/shortened' element={<ShortenedPage />} />
        <Route path='/click-counter' element={<ClickCounter />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <TheFooter />
    </>
  );
}



export default App;

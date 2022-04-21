import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TheHomePage from './pages/TheHomePage';
import ErrorPage from './pages/ErrorPage';
import TheHeader from './layout/TheHeader';



const App = () => {
  return (
    <>
      <TheHeader />
      <Routes>
        <Route path='/' element={<TheHomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}



export default App;

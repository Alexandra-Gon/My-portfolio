import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
// Components
import Navbar from './Components/Navbar/Navbar';
import FooterContact from './Components/FooterContact/FooterContact';
import BackToTop from './Components/BackToTop/BackToTop';
// Styles
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/proyectos' element={<ProjectsPage />} />
      </Routes>
      <FooterContact />
      <BackToTop />
    </BrowserRouter>
  );
};

export default App;

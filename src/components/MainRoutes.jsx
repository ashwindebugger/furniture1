// MainRoutes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import your other components
import About from './About';
import Services from './Services';
import Products from './Products';
import ContactUs from './ContactUs';
import Help from './help'
import Login from './Login';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/help" element={<Help />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;

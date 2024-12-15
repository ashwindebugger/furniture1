
import Login from "../components/SignIn";

import Signup from "../components/SignUp";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Horizon from '../components/HorizontalNavbar'
import Product from '../components/ProductPage'
//import Serives from '../components/Servicee';
import Contact from "../components/Contact";
import Services from "../components/Servicee";
import Help from "../components/help";
import About from "../iabout"
import Cart from "../components/Cart";
import Func from "../components/Routing";
import Amazon from "../components/amazon";
const Routing = () => {
  return (
    <Routes>
      <Route path='/Home' element={<Horizon/>} />
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Go" element={<Product/>} />
      <Route path="/Serives" element={<Services/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Help" element={<Help/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/add" element={<Func/>} />
      <Route path="/Products" element={<Amazon/>} />

      
   
    </Routes>
  );
};

export default Routing;

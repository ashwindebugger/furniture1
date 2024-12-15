// HorizontalNavbar.jsx

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faInfo, faEnvelope, faQuestion, faSignInAlt, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Hori from './forflip';
import './HorizontalNavbar.css'; // Add a CSS file for styling

// Styles directly defined within the component
const navbarStyle = {
  backgroundColor: '#555',
  display: 'flex',
  //backgroundSize:'cover',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  width:'100%'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
  transition: 'background-color 0.3s',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};

const activeLinkStyle = {
  backgroundColor: 'white',
  color: '#333',
};

const tooltipStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  top: '30px',
  left: 0,
};

const componentDetails = {
  home: 'Welcome to our Furniture Store! Find the perfect furniture for your home.',
  about: 'Learn more about our company and our commitment to quality furniture.',
  services: 'Explore our services to assist you in creating the perfect living space.',
  products: 'Discover a wide range of high-quality furniture for every room.',
  contact: 'Contact us for any inquiries or assistance. We are here to help!',
  help: 'Get answers to frequently asked questions or contact our support team.',
};

const contactDetails = {
  address: '123 Main St, Cityville, Country',
  phone: '+123 456 7890',
  email: 'info@example.com',
};

const HorizontalNavbar = () => {
  const [showTooltip, setShowTooltip] = useState(null);
  const navigate = useNavigate();

  const handleComponentHover = (component) => {
    setShowTooltip(component);
  };

  const handleComponentLeave = () => {
    setShowTooltip(null);
  };

  const handleSignInClick = () => {
    // Add navigation logic for Sign In
    navigate('/Sign');
  };

  const product = () => {
    navigate('/Products');
  };

  const serv = () => {
    navigate('/Serives');
  };

  const cont = () => {
    navigate('/Contact');
  };

  const helpp = () => {
    navigate('/Help');
  };

  const abou = () => {
    navigate('/About');
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <NavLink to="/Login" style={linkStyle} activeStyle={activeLinkStyle} onMouseEnter={() => handleComponentHover('home')} onMouseLeave={handleComponentLeave}>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Switch Account
          {showTooltip === 'home' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.home}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/About" style={linkStyle} activeStyle={activeLinkStyle} onClick={abou} onMouseEnter={() => handleComponentHover('about')} onMouseLeave={handleComponentLeave}>
          <FontAwesomeIcon icon={faInfo} style={{ marginRight: '5px' }} /> About
          {showTooltip === 'about' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.about}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/Serives" style={linkStyle} activeStyle={activeLinkStyle} onClick={serv} onMouseEnter={() => handleComponentHover('services')} onMouseLeave={handleComponentLeave}>
          Services
          {showTooltip === 'services' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.services}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/Add" style={linkStyle} activeStyle={activeLinkStyle} onClick={product} onMouseEnter={() => handleComponentHover('products')} onMouseLeave={handleComponentLeave}>
          <FontAwesomeIcon icon={faBars} style={{ marginRight: '5px' }} /> Products
          {showTooltip === 'products' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.products}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/Contact" style={linkStyle} activeStyle={activeLinkStyle} onClick={cont} onMouseEnter={() => handleComponentHover('contact')} onMouseLeave={handleComponentLeave}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /> Contact Us
          {showTooltip === 'contact' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.contact}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/Help" style={linkStyle} activeStyle={activeLinkStyle} onClick={helpp} onMouseEnter={() => handleComponentHover('help')} onMouseLeave={handleComponentLeave}>
          <FontAwesomeIcon icon={faQuestion} style={{ marginRight: '5px' }} /> Help
          {showTooltip === 'help' && (
            <div style={tooltipStyle}>
              <p>{componentDetails.help}</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/" style={linkStyle} activeStyle={activeLinkStyle} onClick={handleSignInClick}>
          <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} /> Sign  Out
        </NavLink>
      </nav>

      <div style={{ padding: '20px', backgroundColor: '#eee' }}>
        <Hori />
      </div>

      <div style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h2>Contact Details</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
          <p>{contactDetails.address}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
          <p>{contactDetails.phone}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
          <p>{contactDetails.email}</p>
        </div>
      </div>

      <div className="footer-container">
        <p>&copy; 2023 Your Furniture Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HorizontalNavbar;

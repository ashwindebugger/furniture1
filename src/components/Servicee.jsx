// Services.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faCouch, faTools, faShippingFast, faPaintRoller, faLightbulb, faHome } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eee' }}>
      <h2>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <ServiceCard icon={faChair} title="Custom Furniture Design" description="Get furniture tailored to your preferences and style." />
        <ServiceCard icon={faCouch} title="Furniture Restoration" description="Renew your old furniture and give it a fresh look." />
        <ServiceCard icon={faTools} title="Assembly and Installation" description="We assemble and install your furniture hassle-free." />
        <ServiceCard icon={faShippingFast} title="Fast and Reliable Delivery" description="Enjoy quick and reliable delivery of your furniture items." />
        <ServiceCard icon={faPaintRoller} title="Custom Finishes" description="Choose from a variety of finishes to match your home decor." />
        <ServiceCard icon={faLightbulb} title="Expert Interior Design Advice" description="Get professional advice on interior design and furniture placement." />
      </div>

      {/* Home Button */}
      <NavLink
        to="/Home"
        style={{
          textDecoration: 'none',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          backgroundColor: 'black', // Set background color to black
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Home
      </NavLink>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div style={{ textAlign: 'center', width: '30%', backgroundColor: 'grey', padding: '20px', borderRadius: '5px', margin: '10px' }}>
    <FontAwesomeIcon icon={icon} style={{ fontSize: '3em', marginBottom: '10px' }} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Services;

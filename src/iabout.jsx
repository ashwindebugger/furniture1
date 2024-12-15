// About.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eee' }}>
      <h2>About Us</h2>
      <p>
        Welcome to our Furniture Store! We are dedicated to providing high-quality and stylish furniture to enhance your living space. Our mission is to make your home beautiful and comfortable with our carefully curated selection of furniture pieces.
      </p>

      {/* Our Story */}
      <section>
        <h3>Our Story</h3>
        <p>
          Established in [Year], our journey began with a passion for creating beautiful and functional furniture. Over the years, we have evolved into a trusted name in the furniture industry, known for our commitment to quality and customer satisfaction.
        </p>
      </section>

      {/* Our Commitment */}
      <section>
        <h3>Our Commitment</h3>
        <p>
          At [Your Furniture Store Name], we are committed to providing furniture that not only meets your aesthetic preferences but also stands the test of time in terms of durability and craftsmanship. Explore our collection and discover the perfect pieces for your home.
        </p>
      </section>

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
          backgroundColor: 'black',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Home
      </NavLink>
    </div>
  );
};

export default About;

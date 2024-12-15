// Help.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Help = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eee' }}>
      <h2>Help and Support</h2>
      <p>
        Need assistance? We're here to help! Explore our frequently asked questions or contact our support team for personalized assistance.
      </p>

      {/* Frequently Asked Questions */}
      <section>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>How do I place an order?</li>
          <li>What payment methods do you accept?</li>
          <li>How can I track my order?</li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      {/* Contact Support */}
      <section>
        <h3>Contact Support</h3>
        <p>If you couldn't find the answer to your question in our FAQs, feel free to reach out to our support team.</p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
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

export default Help;

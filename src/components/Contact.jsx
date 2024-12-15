// Contact.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const contactDetails = {
  address: '123 Furniture Street, Furnitropolis, Furnitureland',
  phone: '+456 789 0123',
  email: 'info@furnitureshop.com',
  workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-73.98765432109876!3d40.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ3JzQ5LjkiTiA3M8KwMjUnMzguMCJX!5e0!3m2!1sen!2sus!4v1609459204589!5m2!1sen!2sus',
};

const Contact = () => {
  return (
    <div>
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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
          <p>{contactDetails.email}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
          <p>{contactDetails.workingHours}</p>
        </div>
      </div>
      
      <div style={{ padding: '20px' }}>
        <h2>Location</h2>
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
          <iframe
            title="Google Map"
            src={contactDetails.mapEmbed}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: '0', position: 'absolute' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      {/* Home Button */}
      <Link to="/Home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333', color: 'white', padding: '15px', textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
        <span>Home</span>
      </Link>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import list from "../components/data";
import Cards from '../components/card';
import '../components/amazon.css'
import { NavLink } from 'react-router-dom';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Amazon = ({ handleClick }) => {
  return (
    <div>

    <section>
      {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}


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

export default Amazon;

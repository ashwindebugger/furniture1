import React from 'react';
import { NavLink } from 'react-router-dom';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = ({ cartItems }) => {
  // Check if cartItems is defined and is an array
  if (!cartItems || !Array.isArray(cartItems)) {
    return (
      <>
    <p>No items in the cart.</p>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
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
    </>);

    
  }

  return (
    <div>
      <h2>Shopping Cart</h2>

      
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {/* Render information about the carted item */}
            <p>Name: {item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      
      <div>

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
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Product Page
      </NavLink>
          </div>
    </div>
  );
};

export default Cart;

import React from "react";
import "../components/navbar.css"

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
 Happy Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}Carts</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

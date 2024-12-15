import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../components/card.css'
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <div className="card">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p style={{color:'blue'}}>Price - {price}Rs</p>
        <button className="cart-button" onClick={() => handleClick(item)}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;

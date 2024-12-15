// FlipCard.jsx
import React, { useState } from 'react';
import './forflip1.css';

const FlipCard = ({ product, handleClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    handleClick(product.id);
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={product.imageSrc} alt={`Product ${product.id}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        </div>
        <div className="flip-card-back">
          <p>{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

// HorizontalNavbar.jsx
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'; // Import the faStar icon
import FlipCard from './forflip1';
import './forflip.css';



const navbarStyle = {
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
};

const products = [
  {
    id: 1,
    name: 'Comfortable Sofa',
    price: 799.99,
    imageSrc: 'https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000011230748-1000011230747_01-2100.jpg',
    ratings: 4.5,
    likes: 10, // Adding likes property for each product
  },
  {
    id: 2,
    name: 'Elegant Sofa',
    price: 499.99,
    imageSrc: 'https://pelicanessentials.com/cdn/shop/products/golden-29_e61bf8b6-647b-423a-8b8e-47a5f5b939b4.jpg?v=1692721029&width=1000',
    ratings: 4.2,
    likes: 7,
  },
  {
    id: 3,
    name: 'Glass Dining Table',
    price: 443.99,
    imageSrc: 'https://eurolivingfurniture.com/cdn/shop/products/planet-cs-4005-v-4_1_600x.jpg?v=1597951242',
    ratings: 6.2,
    likes: 8,
  },
  {
    id: 4,
    name: 'Drawer-Shelf',
    price: 499.99,
    imageSrc: 'https://media.designcafe.com/wp-content/uploads/2021/05/31164707/multi-purpose-furniture-idea-for-your-home.jpg',
    ratings: 4.2,
    likes: 8.5,
  },
  // Add more products
];

const HorizontalNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toString().includes(searchQuery)
  );

  const handleLikeClick = (productId) => {
    const likedProduct = products.find((product) => product.id === productId);

    if (likedProduct) {
      likedProduct.likes += 1;
    }
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '5px', marginRight: '10px' }}
          />
          <FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} />
        </div>
      </nav>

      <div style={{ padding: '20px', backgroundColor: '#eee' }}>
        <h2>
          <FontAwesomeIcon icon={faStar} style={{ marginRight: '5px' }} /> Featured Products
        </h2>
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flip-card-container">
              <FlipCard product={product} handleClick={handleLikeClick} />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default HorizontalNavbar;

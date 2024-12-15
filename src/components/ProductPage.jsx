// Import necessary dependencies
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  faThumbsUp, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../components/Cart.jsx'; // Import the Cart component
import { NavLink } from 'react-router-dom';
import {  faHome } from '@fortawesome/free-solid-svg-icons';

// Styles directly defined within the component
const navbarStyle = {
  backgroundColor: '#555',
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
  },
  {
    id: 2,
    name: 'Elegant Dining Table',
    price: 499.99,
    imageSrc: 'https://pelicanessentials.com/cdn/shop/products/golden-29_e61bf8b6-647b-423a-8b8e-47a5f5b939b4.jpg?v=1692721029&width=1000',
    ratings: 4.2,
  },
  {
    id: 3,
    name: 'CupBoard Frame',
    price: 899.99,
    imageSrc: 'https://wakefitdev.gumlet.io/img/wardrobes/r1/WWRB4DH1ORGANZAPCWR1/1.jpg?w=1700',
    ratings: 4.8,
  },
  {
    id: 4,
    imageSrc: 'https://woodstage.in/wp-content/uploads/2021/11/71Sjg7GOfeL._SL1500_-400x400.jpg',
    name: 'Customized Bed',
    price: 349.99,
    ratings: 4.0,
  },
  {
    id: 5,
    name: 'Classical WoodenBed',
    price: 299.99,
    imageSrc: 'https://ebansal.com/cdn/shop/products/EBANSAL_JODHPUR_SOFA_11.jpg?v=1648029670',
    ratings: 4.3,
  },
  {
    id: 6,
    name: 'Hall Set',
    price: 599.99,
    imageSrc: 'https://rajadigitalplanets.com/cdn/shop/products/61KydgWLemL_800x.jpg?v=1633516868',
    ratings: 4.7,
  },
  {
    id: 7,
    name: 'Vintage Nightstand',
    price: 199.99,
    imageSrc: 'https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/f/l/fl6-10001_8_.webp',
    ratings: 4.2,
  },
  {
    id: 8,
    name: 'Modern Desk',
    price: 449.99,
    imageSrc: 'https://rukminim1.flixcart.com/image/850/1000/l2urv680/office-study-table/n/v/o/plywood-engineered-wood-st-02-ng-decor-black-original-image3pxejw7w59q.jpeg?q=20',
    ratings: 4.5,
  },
  {
    id: 9,
    name: 'Chic Ottoman',
    price: 159.99,
    imageSrc: 'https://cdn.shopify.com/s/files/1/2461/0855/products/Iconic-Home-Adeline-Velvet-Storage-Ottoman-Blush_400x400.jpg?v=1692908140',
    ratings: 4.1,
  },
  {
    id: 10,
    name: 'Sleek TV Stand',
    price: 329.99,
    imageSrc: 'https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/furniture/cabinets-side-boards/FUR.CAB.67243524_1668404624542.webp',
    ratings: 4.4,
  },
  {
    id: 11,
    name: 'Minimalist Wardrobe',
    price: 749.99,
    imageSrc: 'https://m.media-amazon.com/images/I/61QQCZISxvL._SX679_.jpg',
    ratings: 4.6,
  },
  {
    id: 12,
    name: 'Outdoor Patio Set',
    price: 899.99,
    imageSrc: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2023/3/17/rx_walmart_wicker-outdoor-set.jpg.rend.hgtvcom.1280.1280.suffix/1679080185262.jpeg',
    ratings: 4.3,
  },
 
   
    
  
];

const HorizontalNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toString().includes(searchQuery)
  );

  const handleLikeClick = (productId) => {
    // Find the product with the given productId
    const likedProduct = products.find((product) => product.id === productId);
    
    // Update the likes count for the liked product
    if (likedProduct) {
      likedProduct.likes += 1;
      // You can implement additional logic here, like sending the updated likes count to a server
    }
  };

  // Function to handle adding items to the cart
  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
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
          <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
        </div>
        {/* Add to Cart Navbar */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/cart"  style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
            Cart
          </Link>
        </div>
      </nav>

      <div style={{ padding: '20px', backgroundColor: '#eee' }}>
        <h2>Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ textAlign: 'center', margin: '10px', width: '30%', backgroundColor: 'grey', padding: '10px', borderRadius: '5px' }}>
              <img src={product.imageSrc} alt={`Product ${product.id}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}</p>
              <p>Ratings: {product.ratings}</p>
              <p>Likes: {product.likes}</p>
              <button onClick={() => handleLikeClick(product.id)}>
                <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }} /> Like
              </button>
              <button onClick={() => handleAddToCart(product.id)}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Define routes using Routes */}
      <Routes>
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />} // Render the Cart component when the route is '/cart'
        />
      </Routes>

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

export default HorizontalNavbar;

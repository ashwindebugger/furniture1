import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const Furniture = () => {
  const Topic = {
    backgroundImage: 'url("https://media.tenor.com/-r1FcJGxGFMAAAAC/loading-bar.gif")',
    width: '100%',
    textAlign: 'center',
    height: '20px',
    backgroundSize: '100% 100%',
  };

  const title_font = {
    color: 'black',
    letterSpacing: '24px',
    fontSize: '13px',
  };

  const title_1 = {
    letterSpacing: '30px',
    color: 'black',
    fontSize: '30px',
    backgroundColor: 'darkBrown',
    fontFamily: 'roboto',
  };

  return (
    <div>
      <div style={Topic}>
        <div style={title_font}>
          <b>New Year! OFFER SALE</b>
        </div>
        <br></br>
        <div style={title_1}>
          <FontAwesomeIcon icon={faStore} style={{ marginRight: '10px' }} />
          <b>URBAN FURNTIURES</b>
        </div>
      </div>

      <div style={{ backgroundColor: '#D3D3D3', width: '100vw' }}></div>
    </div>
  );
};

export default Furniture;

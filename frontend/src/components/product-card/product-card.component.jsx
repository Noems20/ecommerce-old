import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './product-card.styles.scss';

const ProductCard = ({ title, productImage }) => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='imgBx'>
          <img src={productImage} alt='Product' />
        </div>
        <div className='contentBx'>
          <h1>{title}</h1>
          <h1 className='price'>$750</h1>
          <div className='size'>
            <h3>Talla: </h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className='color'>
            <h3>Color: </h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to='#'>Comprar ahora</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

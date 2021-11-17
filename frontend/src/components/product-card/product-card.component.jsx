import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './product-card.styles.scss';

const ProductCard = ({ title, productImage }) => {
  return (
    <div class='container'>
      <div class='card'>
        <div class='imgBx'>
          <img src={productImage} alt='Product' />
        </div>
        <div class='contentBx'>
          <h1>{title}</h1>
          <h1 class='price'>$750</h1>
          <div class='size'>
            <h3>Talla: </h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div class='color'>
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

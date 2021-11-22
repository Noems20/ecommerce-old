import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Rating from '../rating/rating.component';

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
          <Rating value={4.5} text='4.5 de 5' />
          <Link to='#'>Comprar ahora</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  clearProducts,
} from '../../redux/products/productsActions';

// STYLES
import { PageGrid } from '../../general.styles';
import {
  LeftColumn,
  RightColumn,
  HeroSubtitleUp,
  HeroTitle,
  HeroSubtitleDown,
  Waves,
} from '../../hero.styles';

import { Hero, HeroImageModified } from './diaries.styles';

// IMAGES
import waves from '../../dev-images/waves2.svg';
import Products from '../../components/products/products.component';
import agenda from '../../dev-images/agenda.png';

const GiftsPage = () => {
  // -------------------- STATE AND CONSTANTS -------------------
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // -------------------- USE EFFECT'S -------------------
  useEffect(() => {
    dispatch(fetchProducts('agendas', 12));
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch]);

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* ---------------------------- HERO ---------------------- */}
      <Hero>
        <LeftColumn>
          <HeroSubtitleUp className='animate__animated animate__fadeInDown'>
            La mejor relación calidad-precio
          </HeroSubtitleUp>
          <HeroTitle className='animate__animated animate__fadeIn animate__delay-1s'>
            Agendas
          </HeroTitle>
          <HeroSubtitleDown className='animate__animated animate__fadeInUp animate__delay-2s'>
            Proximamente Agendas Personalizadas
          </HeroSubtitleDown>
        </LeftColumn>

        <RightColumn>
          <Waves src={waves} />
          <HeroImageModified
            src={agenda}
            className='animate__animated animate__fadeIn animate__delay-3s'
          />
        </RightColumn>
      </Hero>
      <Products products={products} />
    </PageGrid>
  );
};

export default GiftsPage;

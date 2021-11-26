// import React from 'react';
// import products from './products';

// REDUX

// COMPONENTS
// import Product from '../../components/product/product.component';
import ProductCard from '../../components/product-card/product-card.component';

// STYLES
import { PageGrid } from '../../general.styles';
import {
  HeroSection,
  LeftColumn,
  RightColumn,
  HeroTitle,
  HeroSubtitleUp,
  HeroSubtitleDown,
  HeroButton,
  HeroImage,
  Waves,
} from '../../hero.styles';
import {
  CategoriesBar,
  BarItem,
  BarItemContent,
  BackgroundImageContainer,
  BarItemTitle,
  SubTitle,
  Line,
  Title,
  ButtonsContainer,
  CatalogButton,
  ProductsContainer,
  ProductsGrid,
  ServiceInfoContainer,
  ServiceInfoContent,
  ServiceInfoItem,
  ServiceInfoIconContainer,
  ServiceInfoTitle,
  ServiceInfoText,
} from './home.page.styles';

// ICONS
import { FaBox, FaTruck } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

// IMAGENES
// import agenda1 from '../../dev-images/agenda1.png';
import agenda2 from '../../dev-images/agenda2.png';
import agenda3 from '../../dev-images/agenda3.png';
import agenda4 from '../../dev-images/agenda4.png';
import agenda5 from '../../dev-images/agenda5.png';
import agenda6 from '../../dev-images/agenda6.png';
import agenda7 from '../../dev-images/agenda7.png';
import agenda8 from '../../dev-images/agenda8.png';
// import agenda9 from '../../dev-images/agenda9.png';
import waves from '../../dev-images/waves2.svg';
import cup from '../../dev-images/products/product-5-fff.png';
import cup2 from '../../dev-images/products/product-5-000.png';
import cup3 from '../../dev-images/products/product-5-828282.png';
import shirt from '../../dev-images/products/product-20-fff.png';
import shirt2 from '../../dev-images/products/product-20-817f83.png';
import shirt3 from '../../dev-images/products/product-20-000.png';
import sweatShirt from '../../dev-images/products/product-21-fff.png';
import sweatShirt2 from '../../dev-images/products/product-21-7e7e7e.png';
import sweatShirt3 from '../../dev-images/products/product-21-000.png';

import scheduleBackground from './schedule.jpg';
import clothingBackground from './clothing.jpg';
import giftsBackground from './gifts.jpg';
import bindingBackground from './binding.jpg';

const Home = () => {
  // -------------------- STATE AND CONSTANTS -------------------
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* ---------------------------- HERO ---------------------- */}
      <HeroSection>
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
          <HeroButton className='animate__animated animate__flipInY animate__delay-2s'>
            Explorar ahora
          </HeroButton>
        </LeftColumn>

        <RightColumn>
          <Waves src={waves} />
          <HeroImage
            src={agenda4}
            className='animate__animated animate__fadeIn animate__delay-3s'
          />
        </RightColumn>
      </HeroSection>
      {/* ---------------------------- CATEGORIES ---------------------- */}
      <CategoriesBar>
        <BarItem className='top'>
          <BarItemContent>
            <BarItemTitle>Encuadernación</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={bindingBackground}
          />
        </BarItem>
        <BarItem>
          <BarItemContent>
            <BarItemTitle>Agendas</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={scheduleBackground}
          />
        </BarItem>
        <BarItem>
          <BarItemContent>
            <BarItemTitle>Ropa</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={clothingBackground}
          />
        </BarItem>
        <BarItem>
          <BarItemContent>
            <BarItemTitle>Regalos</BarItemTitle>
          </BarItemContent>
          <BackgroundImageContainer
            className='background-image'
            imageUrl={giftsBackground}
          />
        </BarItem>
      </CategoriesBar>
      {/* ---------------------------- PRODUCTS ---------------------- */}
      <ProductsContainer>
        <SubTitle>Catálogo</SubTitle>
        <Line />
        <Title>Más vendidos</Title>
        <ButtonsContainer>
          <CatalogButton className='active'>Agendas</CatalogButton>
          <CatalogButton>Ropa</CatalogButton>
          <CatalogButton>Regalos</CatalogButton>
        </ButtonsContainer>
        <ProductsGrid>
          <ProductCard productImage={cup} title='Agenda 2022' tag='AGEN' />
          <ProductCard productImage={cup2} title='Agenda 2022' tag='AGEN' />
          <ProductCard productImage={cup3} title='Agenda 2022' tag='AGEN' />
          <ProductCard productImage={shirt} title='Agenda 2022' tag='AGEN' />
          <ProductCard productImage={shirt2} title='Agenda 2022' tag='AGEN' />
          <ProductCard productImage={shirt3} title='Agenda 2022' tag='AGEN' />
          <ProductCard
            productImage={sweatShirt}
            title='Agenda 2022'
            tag='AGEN'
          />
          <ProductCard
            productImage={sweatShirt2}
            title='Agenda 2022'
            tag='AGEN'
          />
          <ProductCard
            productImage={sweatShirt3}
            title='Agenda 2022'
            tag='AGEN'
          />
          <ProductCard
            productImage={agenda2}
            title='Encuadernado azul'
            tag='AGEN'
          />
          <ProductCard productImage={agenda3} title='Agenda MTIE' tag='AGEN' />
          <ProductCard productImage={agenda4} title='Agenda UAD' tag='AGEN' />
          <ProductCard productImage={agenda5} title='Agenda IEZ' tag='AGEN' />
          <ProductCard
            productImage={agenda6}
            title='Encuadernado keratol'
            tag='AGEN'
          />
          <ProductCard productImage={agenda7} title='Agenda UTZAC' tag='AGEN' />
          <ProductCard
            productImage={agenda8}
            title='Encuadernado keratol'
            tag='AGEN'
          />
          {/* <ProductCard productImage={agenda9} title='Agenda 2022' tag='AGEN' /> */}
        </ProductsGrid>
      </ProductsContainer>

      {/* ---------------------------- SERVICE INFO ---------------------- */}
      <ServiceInfoContainer>
        <SubTitle>Servicio</SubTitle>
        <Line />
        <Title>Características</Title>

        <ServiceInfoContent>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <FaBox />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Sencillo sistema de ordenes</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <FaTruck />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Entregas en tiempo</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
          <ServiceInfoItem>
            <ServiceInfoIconContainer>
              <GiTakeMyMoney />
            </ServiceInfoIconContainer>
            <ServiceInfoTitle>Garantía de devolución del 100%</ServiceInfoTitle>
            <ServiceInfoText>
              Muy sencillo si la verdad me siento bien con hambre y ganas de ir
              por unas pizzas.
            </ServiceInfoText>
          </ServiceInfoItem>
        </ServiceInfoContent>
      </ServiceInfoContainer>
    </PageGrid>
  );
};

export default Home;

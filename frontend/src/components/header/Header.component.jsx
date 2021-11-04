import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

// REDUX

// COMPONENTS

// STYLES
import {
  HeaderContainer,
  NavLogoLink,
  NavLogo,
  MenuIcon,
  MenuIconLine,
  NavMenu,
  NavItem,
  NavbarLink,
  CartCount,
} from './header.styles';

import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const [burguerClass, setBurguerClass] = useState('');
  // ------------------------------ USE EFFECT --------------------------
  useEffect(() => {
    if (window.innerWidth > 800) {
      setCollapse(false);
      setBurguerClass('');
    } else {
      setCollapse(true);
    }

    function handleResize() {
      if (window.innerWidth > 800) {
        setCollapse(false);
        setBurguerClass('');
      } else {
        setCollapse(true);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // ------------------------------ HANDLERS --------------------------
  // const logoutHandler = () => {};

  const handleBurgerClass = () => {
    if (burguerClass === '') {
      setBurguerClass('active');
    } else if (burguerClass === 'active') {
      setBurguerClass('unactive');
    } else {
      setBurguerClass('active');
    }
  };

  return (
    <HeaderContainer>
      {/* ------------------- LOGO ------------------ */}
      <NavLogoLink to='/' exact>
        <NavLogo src={logo} />
      </NavLogoLink>
      {/* --------------- BURGER BUTTON ------------- */}
      <MenuIcon
        htmlFor='menu-btn'
        className={burguerClass}
        onClick={handleBurgerClass}
      >
        <MenuIconLine className={burguerClass} onClick={handleBurgerClass} />
      </MenuIcon>

      {/* ----------------- NAV ITEMS ------------------ */}
      <NavMenu className={burguerClass}>
        <NavItem>
          <NavbarLink activeClassName='is-active' to='/agendas' exact>
            Agendas
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink activeClassName='is-active' to='/encuadernacion' exact>
            Encuadernación
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink activeClassName='is-active' to='/ropa' exact>
            Ropa
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink activeClassName='is-active' to='/regalos' exact>
            Regalos
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink activeClassName='is-active' to='/carrito' exact>
            {collapse ? (
              'Carrito'
            ) : (
              <>
                <FiShoppingCart className='cart' />
                <CartCount>
                  <p>5</p>
                </CartCount>
              </>
            )}
          </NavbarLink>
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;

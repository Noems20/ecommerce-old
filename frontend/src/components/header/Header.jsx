import React from 'react';
import logo from './logo.svg';

// Styles
import {
  HeaderContainer,
  NavContainer,
  NavLogoLink,
  NavLogo,
  NavItems,
  NavItem,
  NavbarLink,
} from './Header.styles';

import { FaUser } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogoLink to='/'>
          <NavLogo src={logo} />
        </NavLogoLink>
        <NavItems>
          <NavItem>
            <NavbarLink to='/'>Muebles</NavbarLink>
          </NavItem>
          <NavItem>
            <ImCart />
            <NavbarLink to='/'>Carrito</NavbarLink>
          </NavItem>
          <NavItem>
            <FaUser />
            <NavbarLink to='/'>Iniciar Sesión</NavbarLink>
          </NavItem>
        </NavItems>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

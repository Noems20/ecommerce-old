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
        <NavLogoLink to='/' exact>
          <NavLogo src={logo} />
        </NavLogoLink>
        <NavItems>
          <NavItem>
            <NavbarLink activeClassName='is-active' to='/' exact>
              Muebles
            </NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink activeClassName='is-active' to='/carrito'>
              <ImCart />
              Carrito
            </NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink activeClassName='is-active' to='/login' exact>
              <FaUser />
              Iniciar Sesión
            </NavbarLink>
          </NavItem>
        </NavItems>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

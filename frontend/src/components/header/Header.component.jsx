import React, { useState } from 'react';
import logo from './logo.svg';
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/userActions';

// Components
import DropDown from '../dropDown/DropDown.component';

// Styles
import {
  HeaderContainer,
  NavContainer,
  NavLogoLink,
  NavLogo,
  NavItems,
  NavItem,
  NavbarLink,
  NoLinkContainer,
  DropDownItem,
  CartCount,
} from './Header.styles';

import { FaUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Header = () => {
  let history = useHistory();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { userInfo } = userLogin;
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const logoutHandler = () => {
    dispatch(logout());
    setOpen(false);
  };

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
            {userInfo ? (
              <NoLinkContainer onClick={() => setOpen(!open)}>
                <BsFillCaretDownFill />
                <DropDown title={userInfo.name} open={open}>
                  <DropDownItem
                    onClick={() => {
                      history.push('/perfil');
                    }}
                  >
                    <FaUser />
                    <p>Perfil</p>
                  </DropDownItem>
                  <DropDownItem onClick={logoutHandler}>
                    <RiLogoutCircleLine />
                    <p>Cerrar Sesión</p>
                  </DropDownItem>
                </DropDown>
              </NoLinkContainer>
            ) : (
              <NavbarLink activeClassName='is-active' to='/login' exact>
                <FaUser />
                Iniciar Sesión
              </NavbarLink>
            )}
          </NavItem>
          <NavItem>
            <NavbarLink activeClassName='is-active' to='/carrito'>
              <FiShoppingCart className='cart' />
              {cart.cartItems.length > 0 && (
                <CartCount>
                  <p>{itemCount}</p>
                </CartCount>
              )}
            </NavbarLink>
          </NavItem>
        </NavItems>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

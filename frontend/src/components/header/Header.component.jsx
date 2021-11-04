import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

import userImage from './user-1.jpg';

// REDUX

// COMPONENTS
import DropDown from '../dropdown/dropdown.component';
import { DropDownItem } from '../dropdown/dropdown.styles';

// STYLES
import {
  HeaderContainer,
  NavLogoLink,
  NavLogo,
  UserInfo,
  UserImage,
  UserName,
  MenuIcon,
  MenuIconLine,
  SearchBar,
  SearchInput,
  SearchButton,
  NavMenu,
  NavItem,
  NavbarLink,
  CartCount,
} from './header.styles';

import { FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { FaUserCircle, FaUser, FaSearch } from 'react-icons/fa';

function useOutsideAlerter(ref, closer) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert('You clicked outside of me!');
        closer(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, closer]);
}

const Header = () => {
  // ------------------------------- STATE AND CONSTANTS ----------------
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [burguerClass, setBurguerClass] = useState('');
  useOutsideAlerter(dropdownRef, setOpen, 'dropdown');
  // ------------------------------ USE EFFECT --------------------------
  useEffect(() => {
    if (window.innerWidth > 1250) {
      setCollapse(false);
      setBurguerClass('');
    } else {
      setCollapse(true);
    }

    function handleResize() {
      if (window.innerWidth > 1250) {
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

      {/* ----------------- SEARCH BAR ------------------ */}
      <SearchBar action='#'>
        <SearchInput placeholder='Buscar productos' />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchBar>

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
                <FiShoppingCart />
                <CartCount>
                  <p>5</p>
                </CartCount>
              </>
            )}
          </NavbarLink>
        </NavItem>
        <NavItem>
          <NavbarLink as='div' ref={dropdownRef} onClick={() => setOpen(!open)}>
            <FaUserCircle />
            <DropDown open={open} setOpen={setOpen}>
              <UserInfo to='/perfil' exact>
                <UserImage src={userImage} />
                <UserName>Jonas</UserName>
              </UserInfo>

              <DropDownItem
                as={NavLink}
                to='/perfil'
                exact
                activeClassName='is-active'
              >
                <FaUser />
                <p>Perfil</p>
              </DropDownItem>
              <DropDownItem>
                <FiLogOut />
                <p>Cerrar Sesión</p>
              </DropDownItem>
            </DropDown>
          </NavbarLink>
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;

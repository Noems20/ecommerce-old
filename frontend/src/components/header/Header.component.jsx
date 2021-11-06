import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
// import logo2 from './logo2.png';

import userImage from './images/user-1.jpg';
import generalImg from './images/general.png';
import hombreImg from './images/hombre.png';
import mujerImg from './images/mujer.jpg';
import niñaImg from './images/niña.png';
import niñoImg from './images/niño.png';

// REDUX

// COMPONENTS
import DropDown from '../dropdown/dropdown.component';
import { DropDownItem } from '../dropdown/dropdown.styles';
import ExpandItem from './expand-item/expand-item.component';
import {
  Column,
  ColumnTitle,
  ColumnItems,
  ColumnItem,
  ColumnImage,
} from './expand-item/expand-item.styles';

// STYLES
import {
  Container,
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
import {
  FaUserCircle,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
} from 'react-icons/fa';

function useOutsideAlerter(closer, ref, secondRef) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (secondRef && secondRef.current) {
        // alert('You clicked outside of me!');
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !secondRef.current.contains(event.target)
        ) {
          closer(false);
        }
      } else if (ref.current && !ref.current.contains(event.target)) {
        closer(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, secondRef, closer]);
}

const Header = () => {
  // ------------------------------- STATE AND CONSTANTS ----------------
  const dropdownRef = useRef(null);
  const itemExpandedRef = useRef(null);
  const itemExpandedRef2 = useRef(null);
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [itemExpanded, setItemExpanded] = useState(false);
  const [burguerClass, setBurguerClass] = useState('');
  const user = false;
  const body = document.querySelector('body');
  useOutsideAlerter(setOpen, dropdownRef);
  useOutsideAlerter(setItemExpanded, itemExpandedRef, itemExpandedRef2);

  // ------------------------------ USE EFFECT --------------------------
  useEffect(() => {
    if (window.innerWidth > 1300) {
      setCollapse(false);
      setBurguerClass('');
    } else {
      setCollapse(true);
    }

    function handleResize() {
      if (window.innerWidth > 1300) {
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
      body.style.overflow = 'hidden';
    } else if (burguerClass === 'active') {
      setBurguerClass('unactive');
      body.style.overflow = 'auto';
    } else {
      setBurguerClass('active');
      body.style.overflow = 'hidden';
    }
  };

  return (
    <Container>
      <HeaderContainer>
        {/* ------------------- LOGO ------------------ */}
        <NavLogoLink to='/' exact>
          <NavLogo src={logo} />
        </NavLogoLink>

        {/* ----------------- SEARCH BAR ------------------ */}
        <SearchBar action='#'>
          <SearchInput type='text' placeholder='Buscar productos' />
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
            <NavbarLink
              as='p'
              ref={itemExpandedRef2}
              onMouseEnter={() => setItemExpanded('clothes')}
              onClick={() =>
                setItemExpanded(itemExpanded === 'clothes' ? false : 'clothes')
              }
            >
              Ropa
              {collapse ? (
                <FaChevronRight
                  style={{
                    fontSize: '2rem',
                    marginLeft: '0.5rem',
                  }}
                />
              ) : (
                <FaChevronDown
                  style={{ fontSize: '1.5rem', marginLeft: '0.2rem' }}
                />
              )}
            </NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink
              onMouseEnter={() => setItemExpanded(false)}
              activeClassName='is-active'
              to='/agendas'
              exact
            >
              Agendas
            </NavbarLink>
          </NavItem>

          <NavItem>
            <NavbarLink
              onMouseEnter={() => setItemExpanded(false)}
              activeClassName='is-active'
              to='/encuadernacion'
              exact
            >
              Encuadernación
            </NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink
              onMouseEnter={() => setItemExpanded(false)}
              activeClassName='is-active'
              to='/regalos'
              exact
            >
              Regalos
            </NavbarLink>
          </NavItem>
          {user ? (
            <>
              <NavItem>
                <NavbarLink
                  onMouseEnter={() => setItemExpanded(false)}
                  activeClassName='is-active'
                  to='/carrito'
                  exact
                >
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
              {collapse ? (
                <>
                  <NavItem>
                    <NavbarLink activeClassName='is-active' to='/perfil' exact>
                      Perfil
                    </NavbarLink>
                  </NavItem>
                  <NavItem>
                    <NavbarLink as='p'>Cerrar sesión</NavbarLink>
                  </NavItem>
                </>
              ) : (
                <NavItem>
                  <NavbarLink
                    onMouseEnter={() => setItemExpanded(false)}
                    as='div'
                    ref={dropdownRef}
                    onClick={() => setOpen(!open)}
                  >
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
              )}
            </>
          ) : collapse ? (
            <NavItem>
              <NavbarLink activeClassName='is-active' to='/login' exact>
                Iniciar sesión cerrado
              </NavbarLink>
            </NavItem>
          ) : (
            <NavItem>
              <NavbarLink activeClassName='is-active' to='/login' exact>
                Iniciar sesión
              </NavbarLink>
            </NavItem>
          )}
        </NavMenu>
      </HeaderContainer>
      {/* ---------------------------- EXPANDED MENU ---------------------------- */}
      {!collapse && (
        <ExpandItem
          reference={itemExpandedRef}
          open={itemExpanded}
          setOpen={setItemExpanded}
        >
          <Column>
            <ColumnTitle to='/'>General</ColumnTitle>
            <ColumnItems>
              <ColumnItem to='/'>Playeras</ColumnItem>
              <ColumnItem to='/'>Sudaderas</ColumnItem>
              <ColumnItem to='/'>Todo</ColumnItem>
            </ColumnItems>
            <ColumnImage url={generalImg} />
          </Column>
          <Column>
            <ColumnTitle to='/'>Hombre</ColumnTitle>
            <ColumnItems>
              <ColumnItem to='/'>Playeras</ColumnItem>
              <ColumnItem to='/'>Sudaderas</ColumnItem>
              <ColumnItem to='/'>Todo</ColumnItem>
            </ColumnItems>
            <ColumnImage url={hombreImg} />
          </Column>
          <Column>
            <ColumnTitle to='/'>Mujer</ColumnTitle>
            <ColumnItems>
              <ColumnItem to='/'>Playeras</ColumnItem>
              <ColumnItem to='/'>Sudaderas</ColumnItem>
              <ColumnItem to='/'>Todo</ColumnItem>
            </ColumnItems>
            <ColumnImage url={mujerImg} />
          </Column>
          <Column>
            <ColumnTitle to='/'>Niño</ColumnTitle>
            <ColumnItems>
              <ColumnItem to='/'>Playeras</ColumnItem>
              <ColumnItem to='/'>Sudaderas</ColumnItem>
              <ColumnItem to='/'>Todo</ColumnItem>
            </ColumnItems>
            <ColumnImage url={niñoImg} />
          </Column>
          <Column>
            <ColumnTitle to='/'>Niña</ColumnTitle>
            <ColumnItems>
              <ColumnItem to='/'>Playeras</ColumnItem>
              <ColumnItem to='/'>Sudaderas</ColumnItem>
              <ColumnItem to='/'>Todo</ColumnItem>
            </ColumnItems>
            <ColumnImage url={niñaImg} />
          </Column>
        </ExpandItem>
      )}
    </Container>
  );
};

export default Header;

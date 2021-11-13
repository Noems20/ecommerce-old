import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './logo.svg';
// import logo2 from './logo2.png';
// import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
// import logo5 from './logo5.svg';

import generalImg from './images/general.png';
import hombreImg from './images/hombre.png';
import mujerImg from './images/mujer.jpg';
import niñaImg from './images/niña.png';
import niñoImg from './images/niño.png';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/userActions';

// COMPONENTS
import DropDown, { DropDownItem } from '../dropdown/dropdown.component';
// import { DropDownItem } from '../dropdown/dropdown.styles';
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

// ICONS
import { FiShoppingCart, FiLogOut, FiLogIn } from 'react-icons/fi';
import {
  FaUserCircle,
  FaUser,
  FaUserPlus,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
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
  const [activeMenu, setActiveMenu] = useState('main');
  const [changeDisplay, setChangeDisplay] = useState(true);
  const [photoHash, setPhotoHash] = useState(Date.now());

  const body = document.querySelector('body');
  useOutsideAlerter(setOpen, dropdownRef);
  useOutsideAlerter(setItemExpanded, itemExpandedRef, itemExpandedRef2);

  const dispatch = useDispatch();
  const { user, userLoaded } = useSelector((state) => state.user);

  // ------------------------------ USE EFFECT --------------------------
  useEffect(() => {
    if (window.innerWidth > 1300) {
      setCollapse(false);
      setActiveMenu('main');
      setBurguerClass('');
      body.style.overflow = 'auto';
    } else {
      setCollapse(true);
    }

    function handleResize() {
      if (window.innerWidth > 1300) {
        setCollapse(false);
        setActiveMenu('main');
        setBurguerClass('');
        body.style.overflow = 'auto';
      } else {
        setCollapse(true);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [body]);

  useEffect(() => {
    // -------------------- UPDATE PHOTO -----------
    if (userLoaded.updatedUser === true) {
      setPhotoHash(Date.now());
    }
  }, [userLoaded]);
  // ------------------------------ HANDLERS --------------------------
  // const logoutHandler = () => {};

  const handleBurgerClass = () => {
    if (burguerClass === '') {
      setBurguerClass('active');
      body.style.overflow = 'hidden';
    } else if (burguerClass === 'active') {
      setBurguerClass('unactive');
      setItemExpanded(false);
      body.style.overflow = 'auto';
      setTimeout(() => {
        setActiveMenu('main');
      }, 600);
    } else {
      setBurguerClass('active');
      body.style.overflow = 'hidden';
    }
  };

  const handleMenu = () => {
    if (changeDisplay) {
      setItemExpanded(itemExpanded === 'clothes' ? false : 'clothes');
    }
    if (collapse) {
      setActiveMenu('clothes');
    }
  };

  const handleHover = () => {
    setChangeDisplay(false);
    setItemExpanded('clothes');
    setTimeout(() => setChangeDisplay(true), 250);
  };

  return (
    <Container>
      <HeaderContainer>
        {/* ------------------- LOGO ------------------ */}
        <NavLogoLink to='/' exact>
          <NavLogo src={logo4} />
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
          <MenuIconLine className={burguerClass} />
        </MenuIcon>

        {/* ----------------- NAV ITEMS ------------------ */}

        <NavMenu className={burguerClass}>
          {/* ------------------------ MAIN MENU --------------------- */}
          {activeMenu === 'main' ? (
            <>
              {/* ----------- ROPA ---------  */}
              <NavItem>
                <NavbarLink
                  as='p'
                  ref={itemExpandedRef2}
                  onClick={handleMenu}
                  onMouseEnter={handleHover}
                  className={!collapse && itemExpanded && 'is-active'}
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
              {/* ----------- AGENDAS ---------  */}
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
              {/* ----------- ENCUADERNACION ---------  */}
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
              {/* ----------- REGALOS ---------  */}
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
              {/* ----------- CARRITO ---------  */}
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

              {/* ------------------ MENU PARA MOVIL -----------------  */}

              {collapse ? (
                user ? (
                  <>
                    <NavItem>
                      <NavbarLink
                        activeClassName='is-active'
                        to='/perfil'
                        exact
                      >
                        Perfil
                      </NavbarLink>
                    </NavItem>
                    <NavItem onClick={() => dispatch(logout())}>
                      <NavbarLink as='p'>Cerrar sesión</NavbarLink>
                    </NavItem>
                  </>
                ) : (
                  <NavItem>
                    <NavbarLink activeClassName='is-active' to='/login' exact>
                      Iniciar sesión
                    </NavbarLink>
                  </NavItem>
                )
              ) : (
                // ----------------------- MENU GRANDE ----------------
                // ------------ USUARIO ---------------
                <NavItem>
                  <NavbarLink
                    onMouseEnter={() => setItemExpanded(false)}
                    as='div'
                    ref={dropdownRef}
                    onClick={() => setOpen(!open)}
                  >
                    <FaUserCircle />
                    <DropDown open={open} setOpen={setOpen}>
                      {user ? (
                        <>
                          <UserInfo to='/perfil' exact>
                            <UserImage
                              src={`/img/users/${user.photo}?${photoHash}`}
                            />
                            <UserName>{user.name.split(' ')[0]}</UserName>
                          </UserInfo>

                          <DropDownItem
                            as={NavLink}
                            to='/perfil'
                            exact
                            activeClassName='is-active'
                            icon={<FaUser />}
                          >
                            <p>Perfil</p>
                          </DropDownItem>
                          <DropDownItem
                            icon={<FiLogOut />}
                            onClick={() => dispatch(logout())}
                          >
                            <p>Cerrar Sesión</p>
                          </DropDownItem>
                        </>
                      ) : (
                        <>
                          <DropDownItem
                            as={NavLink}
                            to='/registro'
                            exact
                            activeClassName='is-active'
                            icon={<FaUserPlus />}
                          >
                            <p>Registrarse</p>
                          </DropDownItem>
                          <DropDownItem
                            as={NavLink}
                            to='/login'
                            exact
                            activeClassName='is-active'
                            icon={<FiLogIn />}
                          >
                            <p>Iniciar Sesión</p>
                          </DropDownItem>
                        </>
                      )}
                    </DropDown>
                  </NavbarLink>
                </NavItem>
              )}
            </>
          ) : (
            <>
              {/* ------------------------ MENU ROPA ------------------ */}
              <NavItem>
                <NavbarLink as='div' onClick={() => setActiveMenu('main')}>
                  <FaChevronLeft style={{ fontSize: '3rem' }} />
                </NavbarLink>
              </NavItem>
              <NavItem>
                <NavbarLink activeClassName='is-active' to='/general' exact>
                  General
                </NavbarLink>
              </NavItem>
              <NavItem>
                <NavbarLink activeClassName='is-active' to='/hombre' exact>
                  Hombre
                </NavbarLink>
              </NavItem>
              <NavItem>
                <NavbarLink activeClassName='is-active' to='/mujer' exact>
                  Mujer
                </NavbarLink>
              </NavItem>
              <NavItem>
                <NavbarLink activeClassName='is-active' to='/niño' exact>
                  Niño
                </NavbarLink>
              </NavItem>
              <NavItem>
                <NavbarLink activeClassName='is-active' to='/niña' exact>
                  Niña
                </NavbarLink>
              </NavItem>
            </>
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

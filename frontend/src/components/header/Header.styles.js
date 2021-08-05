import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #fff;
  height: 8rem;
  padding: 1.5rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;

  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const NavLogoLink = styled(NavLink)`
  /* text-decoration: none; */
`;

export const NavLogo = styled.img`
  height: 100%;
`;

export const NavItems = styled.ul`
  list-style: none;
  margin-left: auto;

  align-self: center;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 3rem;
  transition: all 0.2s ease;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 300;

  & svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  &:hover,
  &.is-active {
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
`;

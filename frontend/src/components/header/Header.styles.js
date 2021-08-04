import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #fff;
  height: 8rem;
  padding: 1.5rem 5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: min-content max-content;
  grid-gap: 1rem;
  align-items: center;

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 300;
`;

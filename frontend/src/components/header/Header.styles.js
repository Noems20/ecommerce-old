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
  align-items: center;
`;

export const NavItem = styled.li`
  margin-left: 3rem;
  position: relative;
  transition: all 0.2s ease;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 300;
  transition: all 0.2s ease;
  position: relative;

  display: flex;
  align-items: center;

  & svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  & .cart {
    font-size: 2.5rem;
    margin-right: 0rem;
  }

  &:hover,
  &.is-active {
    color: var(--color-primary);
    transition: all 0.2s ease;

    & div {
      background-color: #000;
    }
  }
`;

export const NoLinkContainer = styled.div`
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  align-items: center;

  & svg {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  &:hover {
    color: var(--color-primary);
    transition: all 0.2s ease;
  }
`;

export const DropDownItem = styled.div`
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;

  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  align-content: center;
  grid-gap: 1rem;

  & * {
    text-decoration: none;
    color: #000;
    font-size: 1.6rem;
    cursor: pointer;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const CartCount = styled.div`
  border-radius: 100%;
  width: 1.7rem;
  height: 1.7rem;
  background-color: var(--color-primary);

  position: absolute;
  top: -0.8rem;
  left: 1.5rem;

  display: grid;
  align-content: center;
  justify-content: center;
  transition: all 0.2s ease;

  & p {
    color: #fff;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 0.5px;
    padding-left: 1px;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  font-size: 1.6rem;
  background-color: #fff;
  height: 8rem;
  width: 100%;
  padding: 1.5rem 4rem;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
`;

export const NavLogoLink = styled(NavLink)`
  height: 100%;
  z-index: 10;
`;

export const NavLogo = styled.img`
  height: 100%;
`;

//------------------------------------------------------------------------
//                              USER
//------------------------------------------------------------------------

export const UserInfo = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: var(--border);
  display: flex;
`;
export const UserImage = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;
export const UserName = styled.p`
  color: #fff;
`;

//------------------------------------------------------------------------
//                              SEARCH BAR
//------------------------------------------------------------------------
export const SearchBar = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    flex: 0 0 70%;
  }
`;
export const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: var(--color-grey-light-2);
  border: none;
  padding: 1rem 2rem;
  border-radius: 100px;
  height: 100%;
  width: 90%;
  transition: all 0.2s;

  &:focus {
    outline: none;
    width: 100%;
    background-color: var(--color-grey-light-3);
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    color: var(--color-grey-light-4);
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  z-index: 1;

  & svg {
    font-size: 1.8rem;
    color: var(--color-grey-dark-3);
    margin-left: -5rem;
  }

  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
`;

//------------------------------------------------------------------------
//                              NAVIGATION MENU
//------------------------------------------------------------------------

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: 1250px) {
    position: absolute;
    overflow-x: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10rem 0;
    width: 100%;
    height: 100vh;
    color: var(--color-grey-dark-1);
    clip-path: circle(200px at top right);
    background: rgba(255, 255, 255, 0.99);
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  @media only screen and (max-width: 1250px) {
    opacity: 0;
    transform: translateX(100%);
    width: 100%;
    text-align: center;

    transition: opacity 0.4s ease-in-out,
      transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:nth-of-type(2) {
      transition-delay: 0.1s;
    }
    &:nth-of-type(3) {
      transition-delay: 0.2s;
    }
    &:nth-of-type(4) {
      transition-delay: 0.3s;
    }
    &:nth-of-type(5) {
      transition-delay: 0.4s;
    }
  }
`;

export const NavbarLink = styled(NavLink)`
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0.2rem;
  padding: 1rem 1rem;
  letter-spacing: 1.5px;
  transition: color 0.2s ease, background-color 0.2s ease;
  position: relative;

  & svg {
    color: var(--color-grey-dark-1);
    font-size: 2.5rem;
    margin-right: 0rem;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  &:hover,
  &.is-active {
    color: var(--color-primary);
    transition: color 0.2s ease, background-color 0.2s ease;

    & svg {
      color: inherit;
    }

    & span {
      background-color: var(--color-grey-dark-1);
    }
  }

  @media only screen and (max-width: 1250px) {
    font-size: 3rem;
    display: block;
    padding: 2rem 0;

    &:hover {
      color: var(--color-primary);
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

//------------------------------------------------------------------------
//                              CART
//------------------------------------------------------------------------
export const CartCount = styled.span`
  border-radius: 100%;
  width: 1.7rem;
  height: 1.7rem;
  background-color: var(--color-primary);

  position: absolute;
  top: -0.8rem;
  right: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  & p {
    color: #fff;
    font-size: 1rem;
    padding-left: 1px;
  }
`;

//------------------------------------------------------------------------
//                              BURGUER
//------------------------------------------------------------------------
export const MenuIcon = styled.div`
  height: 100%;
  cursor: pointer;
  display: none;
  z-index: 10;

  @media only screen and (max-width: 1250px) {
    display: flex;
    align-items: center;

    &.active {
      border-radius: 50%;
      /* animation: pulse 1s; */
    }

    &.unactive ~ ul {
      transition: opacity 0.8s 0.5s, clip-path 1s 0.5s;
    }

    &.active ~ ul {
      transition: opacity 0.8s 0.5s, clip-path 1s 0.5s;
      opacity: 1;
      clip-path: circle(100% at center);

      li {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.4s ease-in-out 1s,
          transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;

        &:nth-of-type(1) {
          transition-delay: 0.7s;
        }
        &:nth-of-type(2) {
          transition-delay: 0.8s;
        }
        &:nth-of-type(3) {
          transition-delay: 0.9s;
        }
        &:nth-of-type(4) {
          transition-delay: 1s;
        }
        &:nth-of-type(5) {
          transition-delay: 1.1s;
        }
      }
    }
  }

  @keyframes pulse {
    from {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    to {
      box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0);
      background: rgba(0, 0, 0, 0);
    }
  }
`;

export const MenuIconLine = styled.span`
  display: block;
  position: relative;
  background: var(--color-grey-dark-1);
  height: 3px;
  width: 25px;
  border-radius: 4px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background: var(--color-grey-dark-1);
  }

  &::before {
    transform: translateY(-7px);
  }

  &::after {
    transform: translateY(7px);
  }

  &.unactive {
    animation: closedMid 0.8s backwards;
    animation-direction: reverse;

    &::before {
      animation: closedTop 0.8s backwards;
      animation-direction: reverse;
    }
    &::after {
      animation: closedBtm 0.8s backwards;
      animation-direction: reverse;
    }
  }

  &.active {
    animation: openMid 0.8s forwards;

    &::before {
      animation: openTop 0.8s forwards;
    }

    &::after {
      animation: openBtm 0.8s forwards;
    }
  }

  @keyframes closedTop {
    0% {
      transform: translateY(-5px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(90deg);
    }
  }

  @keyframes closedMid {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes closedBtm {
    0% {
      transform: translateY(5px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(90deg);
    }
  }

  @keyframes openTop {
    0% {
      transform: translateY(-5px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(90deg);
    }
  }

  @keyframes openMid {
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes openBtm {
    0% {
      transform: translateY(5px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(0px) rotate(90deg);
    }
  }
`;

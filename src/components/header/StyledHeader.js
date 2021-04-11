import styled from "@emotion/styled";
import {themeColor, Wrapper} from "../StyledGlobal";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

export const HeaderWrapper = styled.div`
  ${Wrapper};
  padding-top: 25px;
  padding-bottom: 25px;
`

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  width: 500px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color .2s linear;
  &:hover {
    color: ${themeColor};
  }
`

export const Burger = styled.div`
  position: absolute;
  width: 400vw;
  background: #333;
  right: 0;  
  top: 0;
  z-index: 10;
`

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: 0;
  padding: 15px 15px 15px 0;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    outline: none;
  }
`

export const BurgerLines = styled.span`
  display: block;
  position: relative;
  width: 35px;
  height: 4px;
  background: #fff; 
  border-radius: 2px;
  font-size: 0;
  color: transparent;
  &:before, :after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 35px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
  }
  &:before {
    top: -12px;
  }
  &:after {
    bottom: -12px;
  }
`
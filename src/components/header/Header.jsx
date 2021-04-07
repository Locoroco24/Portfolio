import React from 'react';
import {Header, HeaderWrapper, Nav, NavLink} from "./StyledHeader";
import {BurgerMenu} from "./Burger";

export const HeaderComponent = () => {

  return (
    <Header>
      <HeaderWrapper>
        <Nav>
          <NavLink href="#">Привет!</NavLink>
          <NavLink href="#">Обо мне</NavLink>
          <NavLink href="#">Мои работы</NavLink>
          <NavLink href="#">Контакты</NavLink>
        </Nav>

        <BurgerMenu />
      </HeaderWrapper>
    </Header>
  )
}


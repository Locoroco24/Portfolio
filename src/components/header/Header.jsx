import {Header, HeaderWrapper, Nav, NavLink} from "./StyledHeader";
import {BurgerMenu} from "./Burger";

export const HeaderComponent = () => {

  return (
    <Header>
      <HeaderWrapper>
        <Nav>
          <NavLink href="#">Привет!</NavLink>
          <NavLink href='#skills'>Обо мне</NavLink>
          <NavLink href="#portfolio">Мои работы</NavLink>
          <NavLink href="#contacts">Контакты</NavLink>
        </Nav>

        <BurgerMenu />
      </HeaderWrapper>
    </Header>
  )
}


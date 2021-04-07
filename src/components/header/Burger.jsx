import {Burger, BurgerButton, BurgerLines} from "./StyledHeader";
import React from "react";

export const BurgerMenu = () => {
  return (
    <div>
      <BurgerButton>
        <BurgerLines>Menu</BurgerLines>
      </BurgerButton>

      <Burger>

      </Burger>
    </div>
  )
}


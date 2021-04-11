import {Intro, IntroSubtitle, IntroTitle, IntroWrapper, ScrollButton} from "./StyledIntro";
import {Colored} from "../StyledGlobal";

export const IntroComponent = () => {

  return (
    <Intro>
      <IntroWrapper>
        <IntroTitle>Привет, меня зовут Маричев Александр<Colored>.</Colored></IntroTitle>
        <IntroSubtitle>Я Frontend Web Developer</IntroSubtitle>
        <ScrollButton href='#skills'>Узнайте больше обо мне</ScrollButton>
      </IntroWrapper>
    </Intro>
  )
}
import {Intro, IntroSubtitle, IntroTitle, IntroWrapper, ScrollButton} from "./StyledIntro";

export const IntroComponent = () => {

  return (
    <Intro>
      <IntroWrapper>
        <IntroTitle>Привет, меня зовут Маричев Александр</IntroTitle>
        <IntroSubtitle>Я Frontend Web Developer</IntroSubtitle>
        <ScrollButton>Узнайте больше обо мне</ScrollButton>
      </IntroWrapper>
    </Intro>
  )
}
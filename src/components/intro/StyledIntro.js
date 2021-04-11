import styled from '@emotion/styled';
import {themeColor, Wrapper} from "../StyledGlobal";

export const Intro = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  background: #44d url('/img/intro.jpeg') no-repeat center/cover;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #222;
    opacity: 0.65;
  }
`

export const IntroWrapper = styled.div`
  ${Wrapper};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const IntroTitle = styled.h2`
  text-align: center;
  margin-bottom: 45px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  z-index: 10;
`

export const IntroSubtitle = styled.p`
  text-align: center;
  margin-bottom: 170px;
  font-size: 40px;
  font-weight: bold;
  color: ${themeColor};
  z-index: 10;
`

export const ScrollButton = styled.a`
  position: relative;
  margin-bottom: 25px;
  color: #fff;
  text-decoration: none;
  z-index: 10;
  transition: color .2s linear;
  cursor: pointer;
  &:hover {
    color: ${themeColor};
  }
  &:after {
    content: '\\27A4';
    position: absolute;
    display: block;
    left: 50%;
    transform: rotate(90deg) translateY(50%);
  }
`
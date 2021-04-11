import styled from "@emotion/styled";
import {themeColor, Wrapper} from "../StyledGlobal";

export const Portfolio = styled.section`
  border-bottom: 1px solid #ccc;
`

export const PortfolioWrapper = styled.div`
  ${Wrapper};
`

export const PortfolioTeamplates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

export const TeamplatesItem = styled.a`
  position: relative;
`

export const TeamplatesImg = styled.img`
  width: 100%;
  height: 100%;
`

export const TeamplatesHoverBlock = styled.div`
  opacity: ${props => props.isHidden ? '0' : '0.7'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${themeColor} no-repeat center;
`


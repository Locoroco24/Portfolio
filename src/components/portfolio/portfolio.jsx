import {
  Portfolio,
  PortfolioTeamplates,
  PortfolioWrapper,
  TeamplatesHoverBlock,
  TeamplatesImg,
  TeamplatesItem
} from "./StyledPortfolio";
import {Colored} from "../StyledGlobal";

export const PortfolioComponent = () => {

  const toggleHoverBlock = (elem) => {
    let hoverBlock = elem.target
    // console.dir(hoverBlock.isHidden)
    // if(hoverBlock.attributes.isHidden){
    //   delete hoverBlock.isHidden
    // }
    // hoverBlock.setAttribute('isHidden', true)
  }

  return (
    <Portfolio>
      <PortfolioWrapper>
        <h2 id='portfolio'>Портфолио<Colored>.</Colored></h2>
        <PortfolioTeamplates>
          <TeamplatesItem>
            <TeamplatesImg src='./img/item1.jpg' />
            <TeamplatesHoverBlock
              isHidden={true}
              onMouseOver={toggleHoverBlock}
              onMouseOut={toggleHoverBlock} />
          </TeamplatesItem>
          <TeamplatesItem>
            <TeamplatesImg src='./img/item2.jpg' />
            <TeamplatesHoverBlock
              isHidden={true}
              onMouseOver={toggleHoverBlock}
              onMouseOut={toggleHoverBlock} />
          </TeamplatesItem>
        </PortfolioTeamplates>
      </PortfolioWrapper>
    </Portfolio>
  )
}
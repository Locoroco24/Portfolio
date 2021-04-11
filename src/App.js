import {Global} from "@emotion/react";
import {AppWrapper, GlobalStyles} from "./components/StyledGlobal";
import {HeaderComponent} from "./components/header/Header";
import {IntroComponent} from "./components/intro/intro";
import {PersonalDataComponent} from "./components/personalData/personalData";
import {PortfolioComponent} from "./components/portfolio/portfolio";
import {ContactsComponent} from "./components/contacts/contacts";

function App() {
  return (
    <AppWrapper>
      <Global styles={GlobalStyles} />
      <HeaderComponent />
      <IntroComponent />
      <PersonalDataComponent />
      <PortfolioComponent />
      <ContactsComponent />
    </AppWrapper>
  );
}

export default App;

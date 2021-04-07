import {Global} from "@emotion/react";
import {AppWrapper, GlobalStyles} from "./components/StyledGlobal";
import {HeaderComponent} from "./components/header/Header";
import {IntroComponent} from "./components/intro/intro";

function App() {
  return (
    <AppWrapper>
      <Global styles={GlobalStyles} />
      <HeaderComponent />
      <IntroComponent />
    </AppWrapper>
  );
}

export default App;

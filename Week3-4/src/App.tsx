import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { lightTheme } from "styles/Themes";
import Main from "pages/Main";
import { Provider } from "jotai";
import Header from "components/common/Header";

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Header />
          <Main />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

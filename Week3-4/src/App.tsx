import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme } from "./styles/Themes";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

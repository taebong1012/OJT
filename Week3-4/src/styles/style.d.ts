import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      text: string;
      icons: string;
      hover: string;
      clicked: string;
    };
  }
}

import FabricJS from "@/assets/svgs/ic_fabricJS.svg";
import MSW from "@/assets/svgs/ic_MSW.svg";
import Phaser from "@/assets/svgs/ic_phaser.svg";
import ReactQuery from "@/assets/svgs/ic_react-query.svg";
import React from "@/assets/svgs/ic_react.svg";
import StyledComponents from "@/assets/svgs/ic_styled-components.svg";
import TailwindCSS from "@/assets/svgs/ic_tailwindCSS.svg";
import Typescript from "@/assets/svgs/ic_typescript.svg";
import Vite from "@/assets/svgs/ic_vite.svg";

const getLibraryImg = (libraryName: string): string | null => {
  switch (libraryName) {
    case "fabricJS":
      return FabricJS;
    case "MSW":
      return MSW;
    case "phaser":
      return Phaser;
    case "react-query":
      return ReactQuery;
    case "react":
      return React;
    case "styled-components":
      return StyledComponents;
    case "tailwindCSS":
      return TailwindCSS;
    case "typescript":
      return Typescript;
    case "vite":
      return Vite;
    default:
      return null;
  }
};

export default getLibraryImg;

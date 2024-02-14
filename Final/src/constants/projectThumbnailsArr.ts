import projectObjectType from "@/types/projectObjType";
import thumb1 from "@/assets/images/thumbnail-pj1.webp";
import thumb2 from "@/assets/images/thumbnail-pj2.webp";
import thumb3 from "@/assets/images/thumbnail-pj3.webp";
import thumb4 from "@/assets/images/thumbnail-pj4.webp";
import thumb5 from "@/assets/images/thumbnail-pj5.webp";

export const projectArr: projectObjectType[] = [
  {
    projectNum: 1,
    projectTitle: "Week 1",
    projectDescription: "SVG를 이용한 문항컨텐츠 개발",
    projectThumbnail: thumb1,
    usedLibrary: ["typescript"],
  },
  {
    projectNum: 2,
    projectTitle: "Week 2",
    projectDescription: "FabricJS를 이용한 문항 컨텐츠 개발",
    projectThumbnail: thumb2,
    usedLibrary: ["typescript", "fabricJS"],
  },
  {
    projectNum: 3,
    projectTitle: "Week 3-4",
    projectDescription: "FabricJS를 이용한 저작도구 개발",
    projectThumbnail: thumb3,
    usedLibrary: ["react", "typescript", "styled-components", "fabricJS"],
  },
  {
    projectNum: 4,
    projectTitle: "Week 5-6",
    projectDescription: "iframe을 통한 학습 성취도 진단 서비스 개발",
    projectThumbnail: thumb4,
    usedLibrary: ["react", "typescript", "tailwindCSS", "react-query", "MSW"],
  },
  {
    projectNum: 5,
    projectTitle: "Week 7-8",
    projectDescription: "Phaser를 이용한 게임 개발",
    projectThumbnail: thumb5,
    usedLibrary: ["react", "typescript", "tailwindCSS", "phaser"],
  },
];

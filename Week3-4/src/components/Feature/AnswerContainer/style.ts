import styled from "styled-components";

export const Title = styled.div`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.25rem;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

type AddDivProps = {
  $canAdd: boolean;
};
export const AddDiv = styled.div<AddDivProps>`
  width: 48px;
  height: 180px;
  background-color: ${({ $canAdd, theme }) =>
    $canAdd ? theme.colors.primary : theme.colors.addDisabled};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
  cursor: ${({ $canAdd }) => ($canAdd ? "pointer" : "default")};

  &:hover {
    ${({ $canAdd, theme }) =>
      $canAdd &&
      `
        background-color: ${theme.colors.hover};
      `}
  }

  &:active {
    ${({ $canAdd, theme }) =>
      $canAdd &&
      `
        background-color: ${theme.colors.clicked};
      `}
  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  height: 180px;
  width: 332px;
  border-radius: 0 10px 10px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow-x: auto; /* 스크롤을 만들어주는 속성 */
`;

export const AnswerWrapper = styled.div`
  flex: 0 0 100px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "S-CoreDream-5Medium";
`;

type AnswerImgDivProps = {
  $url: any;
};
export const AnswerImgDiv = styled.div<AnswerImgDivProps>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  width: 100%;
  height: 60px;
`;

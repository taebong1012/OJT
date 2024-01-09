import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const AddDiv = styled.div`
  width: 48px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.addDisabled};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
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
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "S-CoreDream-5Medium";
`;

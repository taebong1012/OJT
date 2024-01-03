import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1220px;
  height: 80px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
`;

export const SubTitle = styled.span`
  font-family: "S-CoreDream-3Light";
  font-size: 0.75rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`;

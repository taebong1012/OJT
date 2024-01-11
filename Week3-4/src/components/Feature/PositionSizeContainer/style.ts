import styled from "styled-components";

export const AContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;
`;

export const AttTitle = styled.div`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.25rem;
  margin-bottom: 16px;
`;

export const AttContainer = styled.div`
  width: 100%;
`;

export const AttWrapper = styled.div``;

export const AttName = styled.div`
  font-family: "S-CoreDream-5Medium";
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const SetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

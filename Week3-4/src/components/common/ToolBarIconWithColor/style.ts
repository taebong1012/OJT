import styled from "styled-components";

export const Container = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Color = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 4px;
`;

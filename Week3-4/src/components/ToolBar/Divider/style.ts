import styled from "styled-components";

export const Line = styled.div`
  height: 30px;
  width: 0.5px;
  background-color: ${({ theme }) => theme.colors.clicked};
  margin-right: 15px;
`;

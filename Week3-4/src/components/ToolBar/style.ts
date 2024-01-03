import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  height: 40px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

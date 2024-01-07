import styled from "styled-components";

export const Container = styled.div`
  margin-right: 15px;
  position: relative;
`;

export const NameArea = styled.div`
  position: absolute;
  background: rgba(125, 125, 125, 0.8);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px;
  font-size: 0.75rem;
  width: 100px;
  text-align: center;
  transform: translate(-30px, 0);
  color: #ffffff;
  z-index: 10;
`;

export const Picker = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px;
  font-size: 0.75rem;
  text-align: center;
  transform: translate(calc(-50% + 15px), 0);
  z-index: 10;
`;

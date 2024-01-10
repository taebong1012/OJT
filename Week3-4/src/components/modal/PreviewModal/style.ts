import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(204, 208, 217, 0.4);
  backdrop-filter: blur(5px);
  position: fixed;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 880px;
  min-width: 880px;
  height: 720px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 40px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
`;

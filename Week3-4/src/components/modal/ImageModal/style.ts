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
  width: 900px;
  min-width: 900px;
  height: 680px;
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

export const ImageWrapper = styled.div`
  width: 100%;
  height: 435px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 42px;
  overflow-y: auto;
`;

interface ImageDivProps {
  $isSelected: boolean;
  $urlPath: string;
}
export const ImageDiv = styled.div<ImageDivProps>`
  background-image: ${(props) => `url(${props.$urlPath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 240px;
  height: 160px;
  cursor: pointer;
  border: ${(props) =>
    props.$isSelected
      ? `6px solid ${props.theme.colors.primary}`
      : "1px solid #D4D4D4"};
  box-shadow: ${(props) =>
    props.$isSelected ? "none" : "0px 0px 10px 0px rgba(0, 0, 0, 0.15)"};
  box-sizing: border-box;
`;

export const PageIndexWrapper = styled.div`
  margin-top: 20px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButtonWrapper = styled.div`
  margin-top: 20px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.125rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.clicked};
  }

  &:disabled {
    background-color: #e5e5e5;
    color: #b5b5b5;
    cursor: default;
  }
`;

interface PageButtonProps {
  $isSelected: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  margin: 0 2px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.$isSelected ? `${props.theme.colors.primary}` : "none"};
`;

import styled from "styled-components";

export const FontFamilyContainer = styled.div`
  width: 100px;
  height: 30px;
  margin-right: 20px;
  position: relative;
`;

export const FontFamilyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dadfe8;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const PickerContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px;
  font-size: 0.75rem;
  text-align: center;
  transform: translate(calc(-50% + 50px), 0);
  z-index: 10;
`;

type FontProps = {
  $font: string;
};
export const Font = styled.div<FontProps>`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  font-family: ${(props) => props.$font};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const FontSizeInput = styled.input`
  width: 40px;
  height: 30px;
  margin-right: 4px;
  border: 1px solid #dadfe8;
  text-align: center;
`;

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

export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 135px;
`;

export const Color = styled.div`
  height: 20px;
  width: 30px;
  background-color: ${(props) => props.color};
  border: 0.5px solid #d4d4d4;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`;

export const StrokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StrokeWrapper = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

interface StrokeWidthProps {
  $width?: number;
  $dashArray?: Array<number>;
}
export const Stroke = styled.hr<StrokeWidthProps>`
  width: 100px;
  height: 0px;
  border-bottom: ${(props) => (props.$width ? `${props.$width}px` : "2px")}
    ${(props) =>
      props.$dashArray
        ? props.$dashArray[0] === 1
          ? "solid"
          : props.$dashArray[0] === 2
          ? "dotted"
          : props.$dashArray[0] === 20
          ? "dashed"
          : "double"
        : "solid"}
    black;
`;

export const StrokeWidthText = styled.span`
  width: 30px;
  display: flex;
  justify-content: end;
`;

export const StrokeStyleContainer = styled.div``;

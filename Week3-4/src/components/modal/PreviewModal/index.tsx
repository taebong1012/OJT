import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import Controller from "controller/core";
import fabric from "controller/fabric";
import { isShowPreviewModalAtom } from "atoms";

const PreviewContents = () => {
  const setIsShowPreviewModal = useSetAtom(isShowPreviewModalAtom);

  return (
    <S.Backdrop>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Preview</S.Title>
          <button
            onClick={() => {
              setIsShowPreviewModal(false);
            }}
          >
            <RxCross1 />
          </button>
        </S.TitleWrapper>
      </S.Container>
    </S.Backdrop>
  );
};

const PreviewModal = () => {
  return (
    <ModalPortal>
      <PreviewContents />
    </ModalPortal>
  );
};

export default PreviewModal;

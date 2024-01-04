import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";

const ImageModalContents = () => {
  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  const handleOnClickClose = () => {
    console.log("이미지 모달 닫기");
    setIsShowImageModal(false);
  };

  return (
    <S.Backdrop>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Sol 이미지</S.Title>
          <button onClick={handleOnClickClose}>
            <RxCross1 />
          </button>
        </S.TitleWrapper>
        <S.ImageWrapper></S.ImageWrapper>
      </S.Container>
    </S.Backdrop>
  );
};

const ImageModal = () => {
  return (
    <ModalPortal>
      <ImageModalContents />
    </ModalPortal>
  );
};

RxCross1;

export default ImageModal;

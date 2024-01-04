import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";
import { useEffect, useState } from "react";
import { getImages } from "api/SolApis";

type solImageType = {
  extension: string;
  height: string;
  imageDivisionCode: string;
  imageId: string;
  reference: string;
  size: string;
  tags: string;
  width: string;
};

const ImageModalContents = () => {
  // https://sol-api.esls.io/images/A1/[imageId].[extension]
  const imageBaseUrl = "https://sol-api.esls.io/images/A1";

  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  const [solImages, setSolImages] = useState<solImageType[]>([]);

  const handleOnClickClose = () => {
    console.log("이미지 모달 닫기");
    setIsShowImageModal(false);
  };

  /** sol에서 저작도구 이미지들 가져오기 */
  const getSolImages = async () => {
    const response: solImageType[] = await getImages();
    const validSolImages = response.filter((img) => img.extension !== "");
    setSolImages([...validSolImages]);
  };

  useEffect(() => {
    getSolImages();
  }, []);

  return (
    <S.Backdrop>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Sol 이미지</S.Title>
          <button onClick={handleOnClickClose}>
            <RxCross1 />
          </button>
        </S.TitleWrapper>
        <S.ImageWrapper>
          {solImages.map((img, index) => (
            <S.Image
              key={index}
              src={`${imageBaseUrl}/${img.imageId}.${img.extension}`}
            />
          ))}
        </S.ImageWrapper>
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

export default ImageModal;

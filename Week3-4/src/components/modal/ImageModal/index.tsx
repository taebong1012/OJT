import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";
import { useEffect, useState } from "react";
import { getImages } from "api/SolApis";
import { addImg } from "components/DrawingCanvas";

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

type selectedImageType = {
  path: string;
  index: number;
};

const ImageModalContents = () => {
  // https://sol-api.esls.io/images/A1/[imageId].[extension]
  const imageBaseUrl = "https://sol-api.esls.io/images/A1";

  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  /** sol api로 받아온 이미지들 */
  const [solImages, setSolImages] = useState<solImageType[]>([]);

  /** 사용자가 선택한 이미지들 */
  const [selectedImages, setSelectedImages] = useState<selectedImageType[]>([]);

  /** 선택한 이미지들을 캔버스에 추가하는 버튼 활성화/비활성화 */
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (selectedImages.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    console.log(selectedImages);
  }, [selectedImages]);

  /** 이미지 클릭했을 때 처리 */
  const handleOnClickImage = (path: string, index: number) => {
    const newSelectedImage: selectedImageType = {
      path: path,
      index: index,
    };

    /** 이미 선택된 이미지 배열에 포함되어 있지 않으면 배열에 추가 */
    if (!selectedImages.some((image) => image.index === index)) {
      setSelectedImages([...selectedImages, newSelectedImage]);
    } else {
      /** 이미 선택된 이미지 배열에 포함되어 있다면 배열에서 삭제 */
      setSelectedImages(
        selectedImages.filter((selectedImage) => selectedImage.index !== index)
      );
      /** 해당 이미지 border 없애기 */
    }
  };

  /** 추가 버튼 클릭했을 때 처리 */
  const handleOnClickAddButton = () => {
    setIsShowImageModal(false);
    addImg(selectedImages);
  };

  /** sol에서 저작도구 이미지들 가져오기 */
  const getSolImages = async () => {
    const response: solImageType[] = await getImages();
    const validSolImages = response.filter((img) => img.extension !== "");
    setSolImages([...validSolImages]);
  };

  /** 모달 렌더링 시 Sol에서 이미지 가져오기 */
  useEffect(() => {
    getSolImages();
  }, []);

  return (
    <S.Backdrop>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Sol 이미지</S.Title>
          <button
            onClick={() => {
              setIsShowImageModal(false);
            }}
          >
            <RxCross1 />
          </button>
        </S.TitleWrapper>
        <S.ImageWrapper>
          {solImages.map((img, index) => (
            <S.Image
              src={`${imageBaseUrl}/${img.imageId}.${img.extension}`}
              key={index}
              onClick={() => {
                handleOnClickImage(
                  `${imageBaseUrl}/${img.imageId}.${img.extension}`,
                  index
                );
              }}
            />
          ))}
        </S.ImageWrapper>
        <S.Wrapper></S.Wrapper>
        <S.Wrapper>
          <S.AddButton disabled={isDisabled} onClick={handleOnClickAddButton}>
            추가
          </S.AddButton>
        </S.Wrapper>
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

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
  imageId: string;
};

const ImageModalContents = () => {
  // https://sol-api.esls.io/images/A1/[imageId].[extension]
  const imageBaseUrl = "https://sol-api.esls.io/images/A1";

  const setIsShowImageModal = useSetAtom(isShowImageModalAtom);

  /** sol api로 받아온 이미지들 */
  const [solImages, setSolImages] = useState<solImageType[]>([]);
  /** 한 페이지에 보여줄 이미지들 */
  const [showingImages, setShowingImages] = useState<solImageType[]>([]);
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
  const handleOnClickImage = (path: string, imageId: string) => {
    const newSelectedImage: selectedImageType = {
      path: path,
      imageId: imageId,
    };

    /** 이미 선택된 이미지 배열에 포함되어 있지 않으면 배열에 추가 */
    if (!selectedImages.some((image) => image.imageId === imageId)) {
      setSelectedImages([...selectedImages, newSelectedImage]);
    } else {
      /** 이미 선택된 이미지 배열에 포함되어 있다면 배열에서 삭제 */
      setSelectedImages(
        selectedImages.filter(
          (selectedImage) => selectedImage.imageId !== imageId
        )
      );
      /** 해당 이미지 border 없애기 */
    }
  };

  /** 추가 버튼 클릭했을 때 처리 */
  const handleOnClickAddButton = () => {
    setIsShowImageModal(false);
    addImg(selectedImages);
  };

  /** 페이지네이션 총 길이 */
  const [paginationLength, setPaginationLength] = useState(0);
  /** 현재 페이지네이션 인덱스 번호 */
  const [paginationIndex, setPaginationIndex] = useState(0);
  /** 페이지네이션 선택되어있는지 배열 */
  const [paginationArr, setPaginationArr] = useState<boolean[]>([]);

  useEffect(() => {
    const newPaginationArr: boolean[] = new Array(paginationLength).fill(false);
    newPaginationArr[paginationIndex] = true;
    setPaginationArr(newPaginationArr);

    /** 보여줄 이미지들 설정 */
    const newShowingImages: solImageType[] = solImages.slice(
      paginationIndex * 51,
      (paginationIndex + 1) * 51
    );
    console.log("보여줄 이미지들: ", newShowingImages);
    setShowingImages(newShowingImages);
  }, [paginationLength, paginationIndex]);

  /** sol에서 저작도구 이미지들 가져오기 */
  const getSolImages = async () => {
    const response: solImageType[] = await getImages();
    const validSolImages = response.filter((img) => img.extension !== "");
    setSolImages([...validSolImages]);
    setPaginationLength(Math.ceil(validSolImages.length / 51));
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
          {showingImages.map((img) => (
            <S.Image
              src={`${imageBaseUrl}/${img.imageId}.${img.extension}`}
              key={img.imageId}
              onClick={() => {
                handleOnClickImage(
                  `${imageBaseUrl}/${img.imageId}.${img.extension}`,
                  img.imageId
                );
              }}
            />
          ))}
        </S.ImageWrapper>
        <S.Wrapper>
          {paginationArr.map((isActive, index) => (
            <S.PageButton
              key={index}
              isActive={isActive}
              onClick={() => {
                setPaginationIndex(index);
              }}
            >
              {index + 1}
            </S.PageButton>
          ))}
        </S.Wrapper>
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

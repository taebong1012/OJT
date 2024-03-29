import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { isShowImageModalAtom } from "atoms";
import { useEffect, useState } from "react";
import { getImages } from "api/SolApis";
import fabric from "controller/fabric";
import Drawer from "Instance/Drawer";

type solImageType = {
  extension: string;
  height: string;
  imageDivisionCode: string;
  imageId: string;
  reference: string;
  size: string;
  tags: string;
  width: string;
  isSelected: boolean;
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
  }, [selectedImages]);

  /** 이미지 클릭했을 때 처리 */
  const handleOnClickImage = (path: string, imageId: string) => {
    const newSelectedImage: selectedImageType = {
      path: path,
      imageId: imageId,
    };

    /** 쏠이미지의 isSelected 배열을 업데이트 하는 함수 */
    const updateIsSelected = (isSelected: boolean, imageId: string) => {
      const updatedSolImages = solImages.map((solImage) =>
        solImage.imageId === imageId
          ? { ...solImage, isSelected: isSelected }
          : solImage
      );
      setSolImages(updatedSolImages);
    };

    /** 이미 선택된 이미지 배열에 포함되어 있지 않으면 배열에 추가 */
    if (!selectedImages.some((image) => image.imageId === imageId)) {
      setSelectedImages([...selectedImages, newSelectedImage]);

      /** 그 이미지의 isSelected 속성을 true로 변경 */
      updateIsSelected(true, imageId);
    } else {
      /** 이미 선택된 이미지 배열에 포함되어 있다면 배열에서 삭제 */
      setSelectedImages(
        selectedImages.filter(
          (selectedImage) => selectedImage.imageId !== imageId
        )
      );

      /** 그 이미지의 isSelected 속성을 false로 변경 */
      updateIsSelected(false, imageId);
    }
  };

  const drawer = Drawer.getInstance();
  /** 추가 버튼 클릭했을 때 처리 */
  const handleOnClickAddButton = () => {
    setIsShowImageModal(false);
    addImg();
  };

  /** 캔버스에 이미지 추가 */
  const addImg = () => {
    if (!drawer.canvas) {
      console.error("drawer.canvas does not exist");
    } else {
      selectedImages.forEach((selectedImage, index) => {
        fabric.Image.fromURL(
          selectedImage.path,
          (img) => {
            img.scaleToWidth(100);
            img.scaleToHeight(100);
            img.set({
              left: 50 + index * 30,
              top: 50 + index * 30,
              originX: "center",
              originY: "center",
            });

            drawer.add(img);
            drawer.canvas!.setActiveObject(img);
            drawer.canvas!.requestRenderAll();
          },
          {
            crossOrigin: "anonymous",
          }
        );
      });
    }
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
    setShowingImages(newShowingImages);
  }, [paginationLength, paginationIndex, solImages]);

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
            <S.ImageDiv
              key={img.imageId}
              $isSelected={img.isSelected}
              $urlPath={`${imageBaseUrl}/${img.imageId}.${img.extension}`}
              onClick={() => {
                handleOnClickImage(
                  `${imageBaseUrl}/${img.imageId}.${img.extension}`,
                  img.imageId
                );
              }}
            />
          ))}
        </S.ImageWrapper>
        <S.PageIndexWrapper>
          {paginationArr.map((isSelected, index) => (
            <S.PageButton
              key={index}
              $isSelected={isSelected}
              onClick={() => {
                setPaginationIndex(index);
              }}
            >
              {index + 1}
            </S.PageButton>
          ))}
        </S.PageIndexWrapper>
        <S.AddButtonWrapper>
          <span>선택 이미지: {selectedImages.length}개</span>
          <S.AddButton disabled={isDisabled} onClick={handleOnClickAddButton}>
            추가
          </S.AddButton>
        </S.AddButtonWrapper>
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

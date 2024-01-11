import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isShowPreviewModalAtom } from "atoms";
import Previewer from "Instance/Previewer";
import fabric from "controller/fabric";

const PreviewContents = () => {
  const setIsShowPreviewModal = useSetAtom(isShowPreviewModalAtom);

  const previewer = Previewer.getInstance();

  const canvasData = localStorage.getItem("canvasData");
  const choiceIdArrJson = localStorage.getItem("choiceIdArr");
  const choiceIdArr = JSON.parse(choiceIdArrJson!);
  const answerId = localStorage.getItem("answerId");

  /** choice인지 확인 */
  const isInChoicesData = (id: string) => {
    for (const choiceId of choiceIdArr) {
      if (choiceId === id) {
        return true;
      }
    }
    return false;
  };

  /** 오브젝트 타입(answer, choice, none) */
  const getObjectType = (obj: fabric.Object) => {
    let type: string;
    let id: string;

    /** 객체 id 받아오기 */
    if (obj instanceof fabric.Group) {
      id = obj._objects[0].data.id;
    } else {
      id = obj.data.id;
    }

    /** 정답 객체라면 */
    if (id === answerId) {
      type = "answer";
    } else if (isInChoicesData(id)) {
      type = "choice";
    } else {
      type = "none";
    }

    return type;
  };

  /** 오브젝트들 속성 설정 */
  const setObjects = () => {
    const canvasObjects: fabric.Object[] = previewer.canvas!.getObjects();
    canvasObjects.forEach((obj) => {
      const type = getObjectType(obj);

      obj.set({
        selectable: false,
        hasControls: false,
        hasBorders: false,
        hoverCursor: "default",
        name: type,
      });

      if (type === "answer" || type === "choice") {
        obj.set({
          hoverCursor: "pointer",
        });
      }

      /** 타입에 따라 함수등록 */
      if (type === "answer") {
        obj.on("mousedown", showCorrectText);
      } else if (type === "choice") {
        obj.on("mousedown", showWrongText);
      }
    });
    previewer.canvas!.requestRenderAll();
  };

  const blurRect = new fabric.Rect({
    width: 800,
    height: 600,
    originX: "center",
    originY: "center",
    top: 300,
    left: 400,
    hoverCursor: "default",
    fill: "#EAEAEA",
    opacity: 0.8,
  });

  const showCorrectText = () => {
    const correctText = new fabric.Text("정답", {
      fontFamily: "국민연금체",
      fontSize: 80,
      fill: "#4DA723",
      originX: "center",
      originY: "center",
      top: 300,
      left: 400,
      hoverCursor: "default",
    });

    previewer.canvas!.add(blurRect);
    previewer.canvas!.add(correctText);
    previewer.canvas!.requestRenderAll();
  };

  const showWrongText = () => {
    const wrongText = new fabric.Text("오답", {
      fontFamily: "국민연금체",
      fontSize: 80,
      fill: "#EA1616",
      originX: "center",
      originY: "center",
      top: 300,
      left: 400,
      hoverCursor: "default",
    });

    previewer.canvas!.add(blurRect);
    previewer.canvas!.add(wrongText);
    previewer.canvas!.requestRenderAll();
  };

  useEffect(() => {
    const canvasElement = document.getElementById(
      "preview-canvas"
    ) as HTMLCanvasElement;
    previewer.injectCanvas(canvasElement);

    if (previewer.canvas) {
      previewer.canvas.backgroundColor = "white";
      previewer.canvas.setDimensions({ width: 800, height: 600 });
      previewer.canvas.selection = false;

      previewer.loadFromJson(canvasData);

      /** 오브젝트들에게 타입 부여 */
      setObjects();
    }

    return () => {
      if (previewer.canvas) {
        previewer.canvas.dispose();
      }
    };
  }, []);

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
        <canvas id="preview-canvas"></canvas>
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

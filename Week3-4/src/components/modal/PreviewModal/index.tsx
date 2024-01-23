import ModalPortal from "components/modal/modalPortal";
import * as S from "./style";
import { RxCross1 } from "react-icons/rx";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isShowPreviewModalAtom } from "atoms";
import Previewer from "Instance/Previewer";
import fabric from "controller/fabric";
import getId from "utils/getId";

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

    /** 객체 id 받아오기 */
    const id = getId(obj);

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
        obj.on("mousedown", () => handleOnClickAnswer(obj));
      } else if (type === "choice") {
        obj.on("mousedown", () => handleOnClickWrong(obj));
      }
    });
    previewer.canvas!.requestRenderAll();
  };

  const handleOnClickAnswer = (obj: fabric.Object) => {
    if (obj instanceof fabric.Group) {
      obj._objects.forEach((o) => {
        if (o instanceof fabric.Rect) {
          o.set({ stroke: "#00da21", fill: "#dff5e2" });
        } else {
          o.set({ fill: "#00da21" });
        }
      });
    }
  };

  const handleOnClickWrong = (obj: fabric.Object) => {
    if (obj instanceof fabric.Group) {
      obj._objects.forEach((o) => {
        if (o instanceof fabric.Rect) {
          o.set({ stroke: "#ff0000", fill: "#ffd6d6" });
        } else {
          o.set({ fill: "#ff0000" });
        }
      });
    }
    showAnswer();
    previewer.canvas!.requestRenderAll();
  };

  const showAnswer = () => {
    const canvasObjects: fabric.Object[] = previewer.canvas!.getObjects();

    for (const canvasObject of canvasObjects) {
      const type = getObjectType(canvasObject);
      if (type === "answer") {
        handleOnClickAnswer(canvasObject);
        return;
      }
    }
  };

  const load = async () => {
    try {
      await previewer.loadFromJson(canvasData);

      /** 오브젝트들에게 타입 부여 */
      setObjects();
    } catch {
      console.error("FAILED: canvas load from json");
    }
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

      load();
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

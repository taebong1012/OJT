import { useEffect } from "react";
import Previewer from "./Instance/Previewer";
import fabric from "./controller/fabric";
import getId from "./utils/getId";

type questionDataType = {
  choiceIdArr: Array<string>;
  canvasData: {
    objects: object;
    background: string;
  };
  answerId: string;
};

function App() {
  useEffect(() => {
    const messageEventHandler = (e: MessageEvent) => {
      console.log("자식의 콘솔 이벤트 감지!");
      const questionData = e.data;
      load(questionData);
    };

    const previewer = Previewer.getInstance();

    /** choice인지 확인 */
    const isInChoicesData = (id: string, choiceIdArr: Array<string>) => {
      for (const choiceId of choiceIdArr) {
        if (choiceId === id) {
          return true;
        }
      }
      return false;
    };

    /** 오브젝트 타입(answer, choice, none) */
    const getObjectType = (
      obj: fabric.Object,
      answerId: string,
      choiceIdArr: Array<string>
    ) => {
      let type: string;

      /** 객체 id 받아오기 */
      const id = getId(obj);

      /** 정답 객체라면 */
      if (id === answerId) {
        type = "answer";
      } else if (isInChoicesData(id, choiceIdArr)) {
        type = "choice";
      } else {
        type = "none";
      }

      return type;
    };

    /** 오브젝트들 속성 설정 */
    const setObjects = (answerId: string, choiceIdArr: Array<string>) => {
      const canvasObjects: fabric.Object[] = previewer.canvas!.getObjects();

      canvasObjects.forEach((obj) => {
        const type = getObjectType(obj, answerId, choiceIdArr);

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
      previewer.canvas!.requestRenderAll();

      if (window) {
        /** 부모 윈도우로 맞았다고 전달 */
        window.parent.postMessage({ isWrong: false, canvasImg: null });
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

      if (window && previewer.canvas) {
        /** 부모 윈도우로 틀렸다고 알려주면서 캔버스 이미지 전달 */
        window.parent.postMessage({
          isWrong: true,
          canvasImg: previewer.canvas.toDataURL(),
        });
      }
    };

    const showAnswer = () => {
      const canvasObjects: fabric.Object[] = previewer.canvas!.getObjects();

      for (const canvasObject of canvasObjects) {
        if (canvasObject.name && canvasObject.name === "answer") {
          if (canvasObject instanceof fabric.Group) {
            canvasObject._objects.forEach((o) => {
              if (o instanceof fabric.Rect) {
                o.set({ stroke: "#00da21", fill: "#dff5e2" });
              } else {
                o.set({ fill: "#00da21" });
              }
            });
          }
          return;
        }
      }
      previewer.canvas!.requestRenderAll();
    };

    const load = async (questionData: questionDataType) => {
      try {
        await previewer.loadFromJson(questionData.canvasData);

        /** 오브젝트들에게 타입 부여 */
        setObjects(questionData.answerId, questionData.choiceIdArr);
      } catch {
        console.error("FAILED: canvas load from json");
      }
    };

    const canvasElement = document.getElementById(
      "preview-canvas"
    ) as HTMLCanvasElement;
    previewer.injectCanvas(canvasElement);

    if (previewer.canvas) {
      previewer.canvas.backgroundColor = "white";
      previewer.canvas.setDimensions({ width: 800, height: 600 });
      previewer.canvas.selection = false;

      window.addEventListener("message", messageEventHandler);
    }

    return () => {
      if (previewer.canvas) {
        previewer.canvas.dispose();
        window.removeEventListener("message", messageEventHandler);
      }
    };
  }, []);

  return <canvas id="preview-canvas"></canvas>;
}

export default App;

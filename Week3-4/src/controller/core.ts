/** import custom fabric */
import fabric from "./fabric";
import { generateId } from "./utils/helper";

export default class Controller {
  id;
  canvas?: fabric.Canvas;

  constructor() {
    this.id = generateId();
  }

  injectCanvas(element: HTMLCanvasElement) {
    this.canvas = new fabric.Canvas(element);
  }
  add(object: fabric.Object) {
    if (!this.canvas) return;
    const data = object.get("data");
    object.set("data", { id: generateId(), ...data });
    this.canvas.add(object);
  }
  toData() {
    if (!this.canvas) return;
    const data = this.canvas.toObject(["data"]);
    return data;
  }

  async loadFromJson(data: unknown) {
    return new Promise<void>((resolve, reject) => {
      if (!this.canvas) return reject();
      this.canvas.loadFromJSON(data, resolve);
    });
  }
}

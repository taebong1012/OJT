/** import custom fabric */
import fabric from "../controller/fabric";
import { generateId } from "../controller/utils/helper";

export default class Drawer {
  static instance: Drawer | null = null;
  id: string;
  canvas?: fabric.Canvas;

  private constructor() {
    this.id = generateId();
  }

  static getInstance(): Drawer {
    if (!Drawer.instance) {
      Drawer.instance = new Drawer();
    }
    return Drawer.instance;
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

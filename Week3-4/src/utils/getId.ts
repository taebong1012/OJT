import fabric from "controller/fabric";

const getId = (obj: fabric.Object) => {
  if (obj instanceof fabric.Group) {
    return obj._objects[0].data.id;
  } else {
    return obj.data.id;
  }
};

export default getId;

import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const $overlay = document.getElementById("overlay");
  if (!$overlay) {
    throw new Error("#overlay element not found");
  }
  return ReactDOM.createPortal(children, $overlay);
};

export default ModalPortal;

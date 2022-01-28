import { Children } from "react";
import "./modal.css";
// import { useParams } from "";
const Modal = ({ children, hideShowModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={hideShowModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

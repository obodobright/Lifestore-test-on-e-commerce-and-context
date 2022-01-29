import { Children } from "react";
import { FaTimes } from "react-icons/fa";
import "./modal.css";
// import { useParams } from "";
const Modal = ({ children, hideShowModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={hideShowModal} className="modalBtn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { FaTimes } from "react-icons/fa";
import "./removemodal.css";

const RemoveModal = ({ children, hideShowModal }) => {
  return (
    <div className="remove-modal-backdrop">
      <div className="remove-modal">
        {children}
        <button onClick={hideShowModal} className="modalBtn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default RemoveModal;

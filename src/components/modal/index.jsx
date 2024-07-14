import "./index.scss"

function Modal({ open = false, onClose }) {
  return (
    <div className={`modal ${open ? "active" : ""}`}>
        <div className="modal__overplay" onClick={onClose}></div>
        <div className="modal__content"></div>
    </div>
   
  )
}

export default Modal
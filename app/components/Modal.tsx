
interface ModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalIsOpen, setModalIsOpen, children }) => {
  return (
    <div>
        <dialog id="my_modal_3" className={`modal ${modalIsOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
                <form method="dialog">
                <button onClick={() => setModalIsOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                { children }
            </div>
        </dialog>
    </div>
  )
}

export default Modal
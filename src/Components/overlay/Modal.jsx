import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modaldiv = document.getElementById("Modal");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, Modaldiv)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        Modaldiv
      )}
    </>
  );
};

export default Modal;

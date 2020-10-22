import React, { Component } from "react";
import "../../styles/Utilities/Modal.scss";
import Backdrop from "./BackDrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { showModal, closeModal, children } = this.props;

    return (
      <>
        <Backdrop showBackDrop={showModal} clickedBackDrop={closeModal} />
        <div
          className={"Modal"}
          style={{
            transform: showModal ? "translateY(0)" : "translateY(-100vh)",
            opacity: showModal ? "1" : "0",
          }}
        >
          {children}
        </div>
      </>
    );
  }
}

export default Modal;

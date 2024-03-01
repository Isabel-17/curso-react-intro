import React from "react";
import  ReactDOM  from "react-dom";
import './ModalCss.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalCss">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
export { Modal }
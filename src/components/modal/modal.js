import React from 'react';

const Modal = (props) => {
    if(!props.show) return null;
    return (
        <>
            <div className="modal-bg"></div>
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-header-container"> 
                        <span>{props.title}</span>
                        <span onClick={props.close}>x</span>
                    </div>
                </div> 
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Modal;
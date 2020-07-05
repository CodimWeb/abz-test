import React from 'react';

const ModalSuccess = (props) => {
    const { closeModal, isOpenModal } = props;
    return (
        <div className={`modal modal-success fade ${isOpenModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Congratulations</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-subtitle">You have successfully passed the registration</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-stretch btn-sm" onClick={closeModal}>Great</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSuccess;
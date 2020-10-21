import React from 'react';
import ReactModal from 'react-modal';

export function TestModal(props) {
  const portalClassName = props.hasHeightWidth ? 'modal-wrapper height-width' : 'modal-wrapper'

  return (
    <ReactModal
      contentLabel='someLabel'
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
      portalClassName={portalClassName}
      shouldCloseOnOverlayClick>
      <button onClick={() => props.setIsOpen(false)}>Hide modal</button>
    </ReactModal>
  )
}
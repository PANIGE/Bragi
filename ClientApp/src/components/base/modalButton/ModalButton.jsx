import React, { useState } from 'react';
import { Modal } from './../modal/Modal.jsx';

export function ModalButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className='modalButton'>Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
  );
}
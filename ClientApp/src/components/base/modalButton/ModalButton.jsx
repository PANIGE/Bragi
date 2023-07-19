import React, { useState } from 'react';
import Modal from 'ClientApp\src\components\base\modal\Modal.jsx';

export default function ModalButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Modal
      </button>
      <Modal
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}
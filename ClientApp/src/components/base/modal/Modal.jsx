import React from "react";
import './modal.css';

export function Modal ({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='report-choice'>

          </div>
          <div className='report-info'>
            <label for="destinataire">Destinataire :</label>
            <select id="destinataire" name="destinataire">
              <option value="">- Choisissez le destinataire -</option>
              <option value="Michelle Ernond">Michelle Ernond</option>
              <option value="Jordan Martinez">Jordan Martinez</option>
              <option value="Camille Lefèvre">Camille Lefèvre</option>
              <option value="Mathis Moreau">Mathis Moreau</option>
              <option value="Hugo Lambert">Hugo Lambert</option>
              <option value="Clémence Rousseau">Clémence Rousseau</option>
              <option value="Amélie Girard">Amélie Girard</option>
              <option value="Éléonore Delabois">Éléonore Delabois</option>
            </select>
            <label for="objet">Objet :</label>
            <input type="text" id="objet" name="objet"/>
            <label for="description">Description :</label>
            <textarea id="description" name="description"/>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={onClose}>
              <span>Envoyer</span>
            </button>
            <button className='btnOutline' onClick={onClose}>
              <span>Annuler</span>
            </button>
          </div>
      </div>
    </div>
  );
};
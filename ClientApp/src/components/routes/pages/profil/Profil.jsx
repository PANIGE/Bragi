import React from 'react';
import './profil.css';
import { ModalButton } from 'ClientApp\src\components\base\modalButton\ModalButton.jsx'

export function Profil () {
  const profil = {
    titre: 'Identité & informations personnelle',
    description: 'Pour éditer vos informations prenez contact avec l\'organisme administratif',
    metier: 'Régisseur',
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tjUOUBGnthmW762mbRAFdQHaE8%26pid%3DApi&f=1&ipt=1d332fcd1e14de39844b9fc93c596509c0f3ea0d339e91f5b1ead65670824628&ipo=images',
    nom: 'Ritchard',
    prenom: 'Sammuel',
    lieuTravail: 'Paris, Lille',
    mail: 'sammuel.ritchard@mail.com',
    numeroTelephone: '+336 87 87 56 44'
  };

  return (
    <div className="profil">
      <div className="profil-header">
        <h1>{profil.titre}</h1>
        <p>{profil.description}</p>
      </div>
      <div className="info-container">
        <div className="metier">
          <h2>{profil.metier}</h2>
        </div>
        <div className="content-info">
          <div className="photo-container">
            <img src={profil.photo} alt='Profil face'/>
          </div>
          <div className="profil-info">
            <h3>{`${profil.prenom} ${profil.nom}`}</h3>
            <p>Lieu de travail : {profil.lieuTravail}</p>
          </div>
          <ModalButton/>
        </div>
      </div>
      <div className="info-container">
      <div className="contact">
        <p>{`${profil.prenom} ${profil.nom}`}</p>
        <p>Mail : {profil.mail}</p>
        <p>Téléphone : {profil.numeroTelephone}</p>
        </div>
      </div>
    </div>
  );
};
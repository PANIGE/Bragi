import React from 'react';

export function Profil () {
    const samuel = {
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
        <h1>il y a une erreur</h1>
        <h1>{samuel.titre}</h1>
        <p>{samuel.description}</p>
        <h2>{samuel.metier}</h2>
        <img src={samuel.photo} alt="Photo de samuel" />
        <h3>{`${samuel.prenom} ${samuel.nom}`}</h3>
        <p>Lieu de travail : {samuel.lieuTravail}</p>
        <p>Mail : {samuel.mail}</p>
        <p>Téléphone : {samuel.numeroTelephone}</p>
      </div>
    );
};
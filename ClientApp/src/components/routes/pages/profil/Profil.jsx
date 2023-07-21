import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './profil.css';
import SmartButton from './../../../base/Button';

import { Header } from './../../../layout/header/Header';

export function Profil() {

  const currentUser = {
    "id": 1,
    "password": "password",
    "role": "Marketing",
    "fullName": "Jean Dupont",
    "email": "Jean.dupont@exemple.com",
  };
  /*
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users', {
            "session": token,
        });

        setUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  if (!token) {
    return <div>Veuillez vous connecter pour accéder à votre profil.</div>;
  }

  if (!user) {
    return <div>Chargement...</div>;
  }
*/
  return (
    <div className="profileContainer">
      <Header page="profil" />
      <div className="profileCard">
        <span className="roleSection">
          {currentUser.role}
        </span>
        <div className="profileContent">
          <span id="profileAvatar"></span>
          <div className="container">
            <div className="profileInfo">
              <div id="profileName">
                <span className='infoTitle'>nom, prénom</span>
                <span className='userData'>{currentUser.fullName}</span>
              </div>
              <div id="profileMail">
                <span className='infoTitle'>email</span>
                <span className='userData'>{currentUser.email}</span>
              </div>
              <div id="profilePassword">
                <span className='infoTitle'>mot de passe</span>
                <span className='userData'>*************</span>
              </div>
            </div>
            <SmartButton color="gray" width={200} height={50} iconClass="fas fa-sign-out-alt">
              Logout
            </SmartButton>
          </div>
        </div>
      </div>
    </div>
  );
};
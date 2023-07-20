import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import SmartButton from './../../../base/Button';

import axios from 'axios';
import showToast from './../../../base/Toaster';

import './login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth', {
        "login": username,
        "password": password,
      });

      showToast('Succès', 'Connexion réussie !' + response, 'success');
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);

      showToast('Erreur', 'Erreur ! ' + error, 'error');
    }
  };

  return (
    <div className="loginContainer">
      <div className="presentation"></div>
      <div className="login">
        <NavLink to="/help" className="link"> Besoin d’aide ? </NavLink>
        <div className="loginContent">
          <span className="logo"></span>
          <div className="speach">
            <h3>Connectez-vous</h3>
            <p>Donnez le tempo à vos gestions de projets</p>
          </div>
          <div className="loginForm">
            <div className="verticalContainer">
              <label htmlFor="mail">Email</label>
              <input className="textInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="verticalContainer">
              <label htmlFor="password">Mot de passe</label>
              <input className="textInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <SmartButton width={200} height={50} onClick={handleLogin} color="gray"> Se connecter </SmartButton>

        </div>
      </div>
    </div>
  );
};

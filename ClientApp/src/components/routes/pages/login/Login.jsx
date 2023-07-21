import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SmartButton from './../../../base/Button';
import axios from 'axios';
import showToast from './../../../base/Toaster';

import './login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await axios.post('/api/auth', {
        "login": username,
        "password": password,
      });

      // Assuming the response contains the token in the 'data' field.
      const token = response.data.token;

      // Store the token securely in local storage.
      localStorage.setItem('accessToken', token);

      showToast('Succès', 'Connexion réussie !', 'success');
      // redirect to new-projects page

      

    } catch (error) {
      console.error('Erreur lors de la connexion :', error);

      showToast('Erreur', 'Erreur ! ' + error.message, 'error');
    }
  };

  return (
    <div className="loginContainer">
      <div className="presentation"></div>
      <div className="login">
        <NavLink to="/help" className="link">
          Besoin d’aide ?
        </NavLink>
        <div className="loginContent">
          <span className="logo"></span>
          <div className="speach">
            <h3>Connectez-vous</h3>
            <p>Donnez le tempo à vos gestions de projets</p>
          </div>
          <div className="loginForm">
            <div className="verticalContainer">
              <label htmlFor="mail">Nom d’utilisateur</label>
              <input
                className="textInput"
                type="text"
                value={username}
                onChange={(e) => {
                  setError('');
                  setUsername(e.target.value);
                }}
              />
              {error && <span className="errorMessage">{error}</span>}
            </div>
            <div className="verticalContainer">
              <label htmlFor="password">Mot de passe</label>
              <input
                className="textInput"
                type="password"
                value={password}
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
              />
              {error && <span className="errorMessage">{error}</span>}
            </div>
          </div>
          <SmartButton width={200} height={50} onClick={handleLogin} color="blue">
            Se connecter
          </SmartButton>
        </div>
      </div>
    </div>
  );
};

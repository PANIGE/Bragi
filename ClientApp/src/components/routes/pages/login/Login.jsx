import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import showToast from 'src/components/base/Toaster.jsx';

import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react"

import './login.css';

export const Login = () => {
  const [show, setShow] = React.useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  document.title = 'Bragi - Connexion';

  const handleClick = () => setShow(!show)

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
      window.location.href = '/dashboard';


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
              <Input placeholder="entrez votre nom d'utilisateur" size='lg'
                value={username}
                onChange={(e) => {
                  setError('');
                  setUsername(e.target.value);
                }}

                height="60px"
              />
              {error && <span className="errorMessage">{error}</span>}
            </div>
            <div className="verticalContainer">
              <label htmlFor="password">Mot de passe</label>

              <InputGroup size='lg'>
                <Input
                  height="60px"
                  type={show ? 'text' : 'password'}
                  placeholder='Entrez votre mot de passe'
                  value={password}
                  onChange={(e) => {
                    setError('');
                    setPassword(e.target.value);
                  }}
                />

              </InputGroup>
              {error && <span className="errorMessage">{error}</span>}
            </div>
          </div>
          <Button onClick={handleLogin} size='lg' height="60px" width="100%" colorScheme="blue" variant="outline">
            Connexion
          </Button>
          
        </div>
      </div>
    </div>
  );
};

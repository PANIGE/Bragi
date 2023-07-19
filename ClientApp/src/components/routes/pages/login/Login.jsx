import React, { useState } from 'react';
import axios from 'axios';
import showToast  from '../../../base/Toaster';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {

      const response = await axios.post('/api/autdh', {
        username: username,
        password: password,
      });

      showToast('Succès', 'Connexion réussie !' + response, 'success');
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);

      showToast('Erreur', 'Erreur ! ' + error, 'error');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

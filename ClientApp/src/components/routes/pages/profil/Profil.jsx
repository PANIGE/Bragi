import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Profil() {
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

  return (
    <div className="profileContainer">
      <h2>Profil de l'utilisateur</h2>
      <p>Nom d'utilisateur : {user.LoginName}</p>
      <p>Nom affiché : {user.DisplayName}</p>
      <p>Rôle : {user.Role.Label}</p>
      {/* Vous pouvez afficher d'autres informations de l'utilisateur en utilisant les propriétés du modèle */}
    </div>
  );
};
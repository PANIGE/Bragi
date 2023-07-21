import React, { useState } from 'react';
import axios from 'axios';

//import {Header} from "./../../../../layout/header/Header.jsx";
import SmartButton from './../../../../base/Button';

import './projectCreation.css';

export function ProjectCreation() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('accessToken');

    const handleCreateProject = async () => {
        console.log(token);
        try {
            if (!title || !description) {
                console.error('Veuillez remplir tous les champs.');
                return;
            }

            const response = await axios.post(
                'api/workflow/new',
                {
                    "Label": title,
                    "Description": description,
                },
                {
                    headers: {
                        "session": token,
                    },
                }
            );

            console.log('Nouveau projet créé avec succès :', response.data);
        } catch (error) {
            console.error('Erreur lors de la création du projet :', error);
        }
    };

    return (
        <div className="projectContainer">
            <h2>Créer un nouveau projet</h2>
            <p>Créez un nouveau projet en remplissant les champs ci-dessous.</p>
            <div className="projectForm">
                <div className="formGroup">
                    <label htmlFor="title">Titre</label>
                    <input
                        type="text"
                        value={title}
                        className="textInput"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="description">Description</label>
                    <textarea
                        value={description}
                        className="textArea"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <SmartButton onClick={handleCreateProject}>Créer le projet</SmartButton>
            </div>
        </div>
    );
};
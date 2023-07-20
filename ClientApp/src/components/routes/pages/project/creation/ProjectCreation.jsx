import React from "react";

import {Header} from "./../../../../layout/header/Header.jsx";



export function ProjectCreation () {
    return (
        <div className="projectContainer">
            <Header />
            <div className="contentHeader">
                <h2>Projets</h2>
                <p> Liste des projets </p>
            </div>
            <form className="projectCreationForm">
                <div className="projectCreationFormHeader">
                    <h2>Création de projet</h2>
                    <p>Créer un nouveau projet</p>
                </div>
                <div className="projectCreationFormContent">
                    <div className="projectCreationFormContentLeft">
                        <div className="projectCreationFormContentLeftHeader">
                            <h3>Informations générales</h3>
                            <p>Informations générales du projet</p>
                        </div>
                        <div className="projectCreationFormContentLeftContent">
                            <div className="projectCreationFormContentLeftContentInput">
                                <label htmlFor="projectName">Nom du projet</label>
                                <input type="text" id="projectName" name="projectName" placeholder="Nom du projet" />
                            </div>
                            <div className="projectCreationFormContentLeftContentInput">
                                <label htmlFor="projectDescription">Description du projet</label>
                                <textarea type="text" id="projectDescription" name="projectDescription" placeholder="Description du projet" />
                            </div>
                            <div className="projectCreationFormContentLeftContentInput">
                                <label htmlFor="projectDate">Date du projet</label>
                                <input type="date" id="projectDate" name="projectDate" placeholder="Date du projet" />
                            </div>
                            <div className="projectCreationFormContentLeftContentInput">
                                <label htmlFor="projectLocation">Lieu du projet</label>
                                <input type="text" id="projectLocation" name="projectLocation" placeholder="Lieu du projet" />
                            </div>
                            <div className="projectCreationFormContentLeftContentInput">
                                <label htmlFor="projectType">participants</label>
                                <input type="text" id="projectType" name="projectType" placeholder="participants" />
                            </div>
                            <button className="btnPrimary">Créer le projet</button>
                            <button className="btnOutline">Annuler</button>

                        </div>
                    </div>
                    </div>
                </form>
            </div>
    );
}
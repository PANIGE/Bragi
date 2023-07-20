import React from "react";

import {Header} from "./../../../../layout/header/Header.jsx";


export function ProjectTask () {

    return (
        <div className="projectContainer">
            <Header />
            <div className="contentHeader">
                <h2>Projets</h2>
                <p> Liste des projets </p>
            </div>
            <div className="projectTask">
                <div className="waintingTask">
                    <div className="waintingTaskHeader">
                        <h3>En attente</h3>
                        <p>En attente de validation</p>
                    </div>
                    <div className="waintingTaskContent">
                    </div>
                </div>
                <div className="inProgressTask">
                    <div className="inProgressTaskHeader">
                        <h3>En cours</h3>
                        <p>En cours de validation</p>
                    </div>
                    <div className="inProgressTaskContent">
                    </div>
                </div>
                <div className="waitingUploadTask">
                    <div className="waitingUploadTaskHeader">
                        <h3>En attente de téléchargement</h3>
                        <p>En attente de téléchargement</p>
                    </div>
                    <div className="waitingUploadTaskContent">
                    </div>
                </div>
                <div className="doneTask">
                    <div className="doneTaskHeader">
                        <h3>Terminé</h3>
                        <p>Terminé</p>
                    </div>
                    <div className="doneTaskContent">
                    </div>
                </div>
            </div>
        </div>
    );

}
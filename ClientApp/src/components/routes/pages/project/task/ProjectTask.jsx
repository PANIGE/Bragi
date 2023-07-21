import React from "react";

import {Header} from "./../../../../layout/header/Header.jsx";

import {ProjectListCard} from "./../../../../layout/project/ProjectListCardX.jsx";

import "./projectTask.css";

export function ProjectTask () {

    
    const users = [
        { id: 1, username: 'Alice_Martin', role: 'monteur' },
        { id: 2, username: 'David_Johnson', role: 'rédacteur' },
        { id: 3, username: 'Emma_Lee', role: 'traducteur' },
        { id: 4, username: 'James_Smith', role: 'cameraman' },
        { id: 5, username: 'Olivia_Wang', role: 'monteur' },
        { id: 6, username: 'Michael_Brown', role: 'rédacteur' },
        { id: 7, username: 'Sophia_Chen', role: 'traducteur' },
      ];

    return (
        <div className="projectContainer">
            <Header />
            <div className="contentHeader">
                <h2>Projets</h2>
                <p> Liste des projets </p>
            </div>
            <div className="projectTask">
            <ProjectListCard state={"En attente de validation"} />
            <ProjectListCard state={"En attente de réception"} />
            <ProjectListCard state={"Tâches terminées"} />
            
            </div>
        </div>
    );

}
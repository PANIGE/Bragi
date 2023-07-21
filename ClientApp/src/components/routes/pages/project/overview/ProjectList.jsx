import React from "react";

import { NavLink } from "react-router-dom";
import {Header} from "./../../../../layout/header/Header.jsx";

import {ProjectListCard} from "./../../../../layout/project/ProjectListCard.jsx";

import "./projectList.css";

export function ProjectList () {
    return (
        <div className="projectContainer">
            <Header />
            <div className="contentHeader">
                <h2>Projets</h2>
                <p> Visualisez vos projets en cours, passés et à venir. Cliquez sur un projet pour obtenir plus d'informations pour ensuite ajouter vos rushs. </p>
            </div>
            <div className="projectList">
                <ProjectListCard state={"En cours"} />
                <ProjectListCard state={"terminé"} />
                <ProjectListCard state={"A venir"} />
            </div>
        </div>
    );
}
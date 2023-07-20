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
                <p> Liste des projets </p>
            </div>
            <div className="projectList">
                <ProjectListCard />
                <ProjectListCard />
                <ProjectListCard />
            </div>
        </div>
    );
}
import React from 'react';

import './project.css';

export function ProjectListCard() {
    return (
        <div className="projectListCardContainer">
                <div className="projectListCardHeader">
                    <span className="circle"></span>
                    <span className="progressionType">En cours</span>
                    <span className="bar"></span>
                </div>
                <div className="projectListCardContent">
                    <span className="projectListCardTitle">Projet 1</span>
                    <span className="projectListCardTitle">Projet 2</span>
                    <span className="projectListCardTitle">Projet 3</span>
                </div>
        </div>
    );
}
                    
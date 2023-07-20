import React from 'react';

import './project.css';

export function ProjectListCard() {
    return (
        <div className="projectListCardContainer">
            <div className="projectListCardHeader">
                <div className="projectListCardHeaderTitle">
                    <span className="circle"></span>
                    <span className="progressionType">En cours</span>
                </div>
                <span className="bar"></span>
            </div>
            <div className="projectListCardContent">
                <div className="projectCard">
                    <div className="projectCardHeader">
                        <span className="date">00/00/00</span>
                        <button className="projectCardButton">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                    <span className="projectCardTitle">Projet 1</span>
                    <span className="projectCardImg" ></span>
                    <div className="projectCardTeam">
                        <div className="projectCardTeamMember">
                            <div className="memberContainer">
                                <span className="member"></span>
                                <span className="member"></span>
                                <span className="member"></span>
                            </div>
                            <div className="memberContainer">
                                Régisseur :
                                <span className="member"></span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        
        </div>

    );
}

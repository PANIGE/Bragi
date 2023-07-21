import React from 'react';

import './project.css';

export function ProjectListCard({ state }) {

    // 3 states : En cours, terminé, à venir with different colors

    const stateColor = () => {
        switch (state) {
            case "En cours":
                return "#FFA500";
            case "terminé":
                return "#4ECD00";
            case "A venir":
                return "#0094FF";
            default:
                return "#0094FF";
        }
    }

    return (
        <div className="projectListCardContainer">
            <div className="projectListCardHeader">
                <div className="projectListCardHeaderTitle">
                    <span className="circle" style={{ backgroundColor: stateColor() }}>

                    </span>
                    <span className="progressionType">En cours</span>
                </div>
                <span className="bar" style={{ backgroundColor: stateColor() }}></span>
            </div>
            <div className="projectListCardContent">
                <div className="projectCard" style={{ width: "100%" }}>
                    <div className="projectCardHeader">

                        <span className="date" style={{ color: stateColor(), backgroundColor: stateColor() + "33" }}>
                            00/00/00</span>
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

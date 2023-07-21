import React from 'react';

import './project.css';
import './projectHoryzontal.css';

export function ProjectListCard({ state, users }) {

    const stateColor = () => {
        switch (state) {
            case "En attente de validation":
                return "#FFA500";
            case "En attente de réception":
                return "#4ECD00";
            case "Tâches terminées":

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
                <div className="projectCard">
                    <div className="projectCardHeader">

                        <span className="date" style={{ color: stateColor(), backgroundColor: stateColor() + "33" }}>
                            {users ? users.username : "error"}
                            </span>
                        <button className="projectCardButton">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                    <span className="taskCardTitle">Name</span>
                </div>
                <div className="projectCard">
                    <div className="projectCardHeader">

                        <span className="date" style={{ color: stateColor(), backgroundColor: stateColor() + "33" }}>
                            {users ? users.username : "error"}
                            </span>
                        <button className="projectCardButton">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                    <span className="taskCardTitle">Name</span>
                </div>

            </div>
        
        </div>

    );
}

import React from 'react';

import './project.css';

export function ProjectListCard({ state, children }) {

    // 3 states : En cours, terminé, à venir with different colors

    const stateColor = () => {
        switch (state) {
            case "En cours":
                return "#FFA500";
            case "Terminé":
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
                    <span className="progressionType">{state}</span>
                </div>
                <span className="bar" style={{ backgroundColor: stateColor() }}></span>
            </div>
            <div className="projectListCardContent">
                {children}
            </div>
        
        </div>

    );
}

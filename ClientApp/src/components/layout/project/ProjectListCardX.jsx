import React from 'react';

import {Button} from '@chakra-ui/react'

// import './project.css';
import './projectHoryzontal.css';

export function ProjectListCards({ state, children }) {

    const stateColor = () => {
        switch (state) {
            case "En attente de validation":
                return "#FFA500";
            case "En attente de Réalisation":
                return "#4ECD00";
            case "Tâches comfirmée":

                return "#0094FF";
            default:
                return "#0094FF";
        }
    }

    return (
        <div className="taskListCardContainer" >
            <div className="projectListCardHeader">
                <div className="projectListCardHeaderTitle">
                    <span className="circle" style={{ backgroundColor: stateColor() }}>

                    </span>
                    <span className="progressionType">{state}</span>
                </div>
                <span className="bar" style={{ backgroundColor: stateColor() }}></span>
            </div>
            <div className="taskListCardContent">
                    {children}
            </div>

        </div>

    );
}

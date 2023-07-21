import React from 'react';

import './dashboard.css';
import DonutChart from '../../../Semi-circle';

import { NavLink } from 'react-router-dom';

const lastProject = {
    "id": 1,
    "name": "Projet 1",
    "description": "Lorem ipsum dolor  sit amet consectetu adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur",
    "team": 6,
}
// generate a span for each team member

export function Dashboard() {
    return (
        <div className="dashboardContainer">
            <h2>Dashboard</h2>
            <div className="dashboardGrid">
                <div className="card" id="A">
                    <div className="lastProjectContainer">
                        <div className="lastProject">
                            <span className="cardTitle">Dernier projet</span>
                            <span className="lastProjectTitle">{lastProject.name}</span>
                        </div>
                        <div className="lastProjectDescription">
                            <span className="lastProjectSectionTitle">Description</span>
                            <span className="lastProjectDescriptionText">
                                {lastProject.description}
                            </span>
                        </div>
                        <div className="lastProjectTeam">
                            <span className="lastProjectSectionTitle">Participants</span>
                            <div className="lastProjectTeamMembers">
                               {lastProject.team}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card" id="B">
                    <DonutChart />
                    <NavLink to="/project" className="seeMore" activeclassname="activeNavLink"> 
                        Voir plus 
                    </NavLink>
                </div>
                <div className="card" id="C"></div>
                <div className="card" id="D">
                    <span className="cardTitle">Notifications</span>
                    <div className="cardListContainer">
                        <div className="listItem">
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 1</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 2</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 3</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card" id="E">
                    <span className="cardTitle">Dernières mise à jour</span>
                    <div className="cardListContainer">
                        <div className="listItem">
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 1</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 2</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">mail 3</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
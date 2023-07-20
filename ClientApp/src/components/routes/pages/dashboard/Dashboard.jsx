import React from 'react';

import './dashboard.css';

export function Dashboard() {
    return (
        <div className="dashboardContainer">
            <h2>Dashboard</h2>
            <div className="dashboardGrid">
                <div className="card" id="A"></div>
                <div className="card" id="B"></div>
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
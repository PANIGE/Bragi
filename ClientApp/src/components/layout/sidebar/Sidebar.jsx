import React from 'react';

import { NavLink } from 'react-router-dom';
import SmartButton from './../../base/Button';

import './sidebar.css';

const Sidebar = () => {

    const currentUser = {
        "id": 1,
        "password": "password",
        "role": "Marketing",
        "fullName": "Jean Dupont",
        "email": "Jean.dupont@exemple.com",
    };


    return (
        <div className="sidebarContainer">
            <div className="sidebarHeader">
            <NavLink to="/profil"  activeclassname="activeNavLink">
                <span id="userIcon"></span>
            </NavLink>
                <span className="userIdentity">
                    <span className="userName">{currentUser.fullName}</span>
                    <span className="userRole">{currentUser.role}</span>
                </span>
                <NavLink to="/notifications" activeclassname="activeNavLink">
                <SmartButton width={50} height={50} color="transparent" iconClass="fas fa-bell fa-xl" />
                </NavLink>
            </div>
            <div className="sidebarNav">
                <NavLink to="/dashboard" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fa-sharp fa-regular fa-gear fa-xl"></i>
                    Dashboard
                </NavLink>
                <NavLink to="/projects" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-project-diagram fa-xl"></i>
                    Projets
                </NavLink>
                <NavLink to="/tasks" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-tasks fa-xl"></i>
                    Tâches
                </NavLink>
                <NavLink to="/notifications" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-bell fa-xl"></i>
                    Notifications
                </NavLink>
                
                <NavLink to="/upload" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-upload fa-xl"></i>
                    Envoyer un fichier
                </NavLink>
                <NavLink to="/help" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-question-circle fa-xl"></i>
                    Aide
                </NavLink>


            </div>
        </div>
    );
}

export default Sidebar;
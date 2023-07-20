import React from 'react';

import { NavLink } from 'react-router-dom';
import SmartButton from './../../base/Button';

import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <span id="userIcon"></span>
                <span className="userIdentity">
                    <span className="userName">John Doe</span>
                    <span className="userRole">Administrateur</span>
                </span>
                <SmartButton width={50} height={50} color="transparent" iconClass="fas fa-cog fa-2xl" />
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
                <NavLink to="/help" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fas fa-question-circle fa-xl"></i>
                    Aide
                </NavLink>


            </div>
        </div>
    );
}

export default Sidebar;
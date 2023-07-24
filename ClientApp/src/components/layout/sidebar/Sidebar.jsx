import React from 'react';

import { NavLink } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react';

import './sidebar.css';

const Sidebar = () => {

    const currentUser = {
        "id": 1,
        "password": "password",
        'image': 'https://bit.ly/broken-link',
        "role": "Marketing",
        "fullName": "Jean Dupont",
        "email": "Jean.dupont@exemple.com",
    };


    return (
        <div className="sidebarContainer">
            <NavLink to="/profil" activeclassname="activeNavLink" className="sidebarHeader">
                <Avatar name={currentUser.fullName} src={currentUser.image} size="lg" />
                <span className="userIdentity">
                    <span id="userName">{currentUser.fullName}</span>
                    <span id="userRole">{currentUser.role}</span>
                </span>
                <NavLink to="/notifications" activeclassname="activeNavLink">
                    <IconButton aria-label='Notifications' variant='ghost'
                        icon={<i className="fas fa-bell fa-xl"></i>} />
                </NavLink>
            </NavLink>
            <div className="sidebarNav">
                <NavLink to="/dashboard" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fa-duotone fa-house fa-xl"></i>
                    Dashboard
                </NavLink>
                <NavLink to="/my-projects" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fa-duotone fa-folder-open fa-xl"></i>

                    Mes projets
                </NavLink>
                <NavLink to="/tasks" className="SidebarLink" activeclassname="activeNavLink">
                    <i className="fa-duotone fa-list-check fa-xl"></i>
                    Tâches
                </NavLink>
                <span className="sidebarTextDivider">
                    Aperçu d'autres pages
                </span>
                <NavLink to="/montage-upload" className="SidebarLink" activeclassname="activeNavLink">
                    <i class="fa-duotone fa-films fa-xl"></i>
                    Envoi de montage
                </NavLink>
                <NavLink to="/rushs-upload" className="SidebarLink" activeclassname="activeNavLink">
                    <i class="fa-duotone fa-camera-movie fa-xl"></i>
                    Envoi de rushs
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
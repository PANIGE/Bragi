import React from 'react';


import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarGroup } from "@chakra-ui/react"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

import './dashboard.css';
import DonutChart from 'src/components/base/Semi-circle';

import Header from 'src/components/layout/header/Header.jsx';

const lastProject = {
    "id": 1,
    "name": "Cours de Saxophone n°5 ",
    "description": "Approche holistique de l'apprentissage du saxophone, combinant à la fois les compétences techniques de jeu et l'exploration musicale.",
    "team": 6,
}


export function Dashboard() {

    document.title = "Bragi - Dashboard";

    return (
        <div className="dashboardContainer">
            <Header 
            leftContent={
                <Breadcrumb fontWeight='bold' fontSize='3xl' align='center' separator='/' flexDir='row' justifyContent='center' >
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#'>
                    Dashboard
                    </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            }
            rightContent={
                <div className="headerNavLinks">
                    <NavLink to="/help" className="link">
                        Besoin d’aide ?
                    </NavLink>
                </div>
            }
            />
            <div className="dashboardGrid">
                <div className="card" id="A">
                    <ScaleFade initialScale={0.9} in={true}>
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
                                <span className="lastProjectSectionTitle">Participants <span className="lastProjectTeamMembers"
                                >
                                    {lastProject.team}</span></span>
                                <div className="lastProjectTeamMembers">
                                    <AvatarGroup size='md' max={3}>
                                        <Avatar name='Ryan Florence' />
                                        <Avatar name='Segun Adebayo' />
                                        <Avatar name='Kent Dodds' />
                                        <Avatar name='Prosper Otemuyiwa' />
                                        <Avatar name='Ryan Florence' />
                                        <Avatar name='Christian Nwamba' />
                                    </AvatarGroup>
                                    <span id="projectOwner">Régisseur : <Avatar name='George Fields' /></span>
                                </div>
                            </div>
                        </div>
                    </ScaleFade>
                </div>

                <div className="card" id="B">
                    <DonutChart />
                    <NavLink to="/my-projects" className="seeMore" activeclassname="activeNavLink">
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
                                <span className="listItemObject">incident montage</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-exclamation fa-xl" style={{ color: 'var(--red)' }}></i>
                                <span className="listItemObject">refus de rendu</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: 'var(--green)' }}></i>
                                <span className="listItemObject">rendu de tâche</span>
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
                                <i className="fa-regular fa-circle-info fa-xl" style={{ color: 'var(--orange)' }}></i>
                                <span className="listItemObject">projet "cours de piano" en attente</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                            <span className="listItemTitle">
                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: 'var(--green)' }}></i>
                                <span className="listItemObject">Assignation de tâche</span>
                                <span className="listItemTime">1 min</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
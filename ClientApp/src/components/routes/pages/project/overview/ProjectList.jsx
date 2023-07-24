import React from "react";

import { NavLink } from "react-router-dom";
import Header from "src/components/layout/header/Header.jsx";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ProjectListCard } from "src/components/layout/project/ProjectListCard.jsx";
import { ProjectCard } from "src/components/layout/project/cards/ProjectCard.jsx";

// local data
import workinprogressProjects from 'src/service/data.workinprogressProjects.js';
import futureProjects from 'src/service/data.futureProjects.js';
import completedProjects from 'src/service/data.completedProjects.js';

import "./projectList.css";

export function ProjectList() {

    document.title = "Bragi - Mes projets";

    const inProgressProjects = workinprogressProjects.slice(0, 3);

    return (
        <div className="projectContainer">
            <Header
                leftContent={
                    <Breadcrumb fontWeight='bold' fontSize='3xl' align='center' separator='/' flexDir='row' justifyContent='center' >
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Mes projets</BreadcrumbLink>
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
            >
            </Header>
            <div className="contentHeader">
                <h2>Récapitulatif de vos projets</h2>
                <p> Visualisez vos projets en cours, passés et à venir. Cliquez sur un projet pour obtenir plus d'informations </p>
            </div>
            <div className="projectList">
                <ProjectListCard state={"En cours"}>
                    {inProgressProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            creationDate={project.date}
                            name={project.name}
                            participants={[
                                { name: project.régisseur, role: 'Régisseur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.marketing, role: 'Marketing', avatarSrc: 'url_de_l_avatar' },
                                { name: project.traducteur, role: 'Traducteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.monteur, role: 'Monteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.cameraman, role: 'Cameraman', avatarSrc: 'url_de_l_avatar' },
                                { name: project.rédacteur, role: 'Rédacteur', avatarSrc: 'url_de_l_avatar'}
                            ]}
                            state={project.status}
                        />
                    ))}
                </ProjectListCard>
                
                <ProjectListCard state={"A venir"}>
                    {futureProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            creationDate={project.date}
                            name={project.name}
                            participants={[
                                { name: project.régisseur, role: 'Régisseur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.marketing, role: 'Marketing', avatarSrc: 'url_de_l_avatar' },
                                { name: project.traducteur, role: 'Traducteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.monteur, role: 'Monteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.cameraman, role: 'Cameraman', avatarSrc: 'url_de_l_avatar' },
                                { name: project.rédacteur, role: 'Rédacteur', avatarSrc: 'url_de_l_avatar'}
                                
                            ]}
                            state={project.status}
                        />
                    ))}
                </ProjectListCard>

                <ProjectListCard state={"Terminé"}>
                    {completedProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            creationDate={project.date}
                            name={project.name}
                            participants={[
                                { name: project.régisseur, role: 'Régisseur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.marketing, role: 'Marketing', avatarSrc: 'url_de_l_avatar' },
                                { name: project.traducteur, role: 'Traducteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.monteur, role: 'Monteur', avatarSrc: 'url_de_l_avatar' },
                                { name: project.cameraman, role: 'Cameraman', avatarSrc: 'url_de_l_avatar' },
                                { name: project.rédacteur, role: 'Rédacteur', avatarSrc: 'url_de_l_avatar'}
                            ]}
                            state={project.status}
                        />
                    ))}
                </ProjectListCard>


            </div>
        </div>
    );
}
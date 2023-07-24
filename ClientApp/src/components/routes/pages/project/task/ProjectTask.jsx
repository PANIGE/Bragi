import React from "react";
import { NavLink } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Mark,
    Text,
} from "@chakra-ui/react";

import Header from "src/components/layout/header/Header.jsx";
import { ProjectListCards } from "src/components/layout/project/ProjectListCardX.jsx";
import { TaskCard } from "src/components/layout/project/cards/TaskCard.jsx";

import "./projectTask.css";

import workinprogressProjects from 'src/service/data.workinprogressProjects.js';

export function ProjectTask() {

    document.title = `Bragi - Tâches : ${workinprogressProjects[0].name}`;

    const currentProjects = workinprogressProjects.find((project) => project.id === 4);

    if (!currentProjects) {
        return <div>None</div>;
    }

    const { name, tasks } = currentProjects;


    // Filtrer les tâches en fonction de leur état
    const tasksEnAttenteValidation = tasks.filter(task => task.status === "En attente de validation");
    const tasksEnAttenteRealisation = tasks.filter(task => task.status === "En attente de réalisation");
    const tasksComfirmee = tasks.filter(task => task.status === "Tâche confirmée");

    return (
        <div className="projectContainer">
            <Header
                leftContent={
                    <Breadcrumb
                        fontWeight="bold"
                        fontSize="2xl"
                        align="center"
                        separator="/"
                        flexDir="row"
                        justifyContent="center"
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <NavLink to="/my-projects">Mes projets</NavLink>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <NavLink to="/project-overview">{name}</NavLink>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage style={{ color: "var(--blue-450)" }}>
                            <BreadcrumbLink>Tâches</BreadcrumbLink>
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
                <h2>Panneau des tâches</h2>
                <Text fontSize='6xl'lineHeight={1.6} textAlign='left' fontWeight='bold' color='gray.700'>
                    Découvrez toutes les tâches du projet, triées par état : "En attente de validation", "En attente de réalisation" et "Tâches confirmées". Consultez les titres, descriptions et états de chaque tâche. Profitez également de la visualisation du rendu final pour certaines tâches en attente de validation. Naviguez facilement entre les listes de tâches grâce aux onglets.
                </Text>
            </div>
            <div className="projectTask">
                {/* Afficher les tâches dans les bonnes TaskListCards */}
                <ProjectListCards state={"En attente de validation"}>
                    {tasksEnAttenteValidation.map((task) => (
                        <TaskCard
                            key={task.id}
                            state={task.status}
                            username={task.users[0].username}
                            role={task.users[0].role}
                        />
                    ))}
                </ProjectListCards>
                <ProjectListCards state={"En attente de Réalisation"}>
                    {tasksEnAttenteRealisation.map((task) => (
                        <TaskCard
                            key={task.id}
                            state={task.status}
                            username={task.users[0].username}
                            role={task.users[0].role}
                        />
                    ))}
                </ProjectListCards>
                <ProjectListCards state={"Tâches comfirmée"}>
                    {tasksComfirmee.map((task) => (
                        <TaskCard
                            key={task.id}
                            state={task.status}
                            username={task.users[0].username}
                            role={task.users[0].role}
                        />
                    ))}
                </ProjectListCards>
            </div>
        </div>
    );
}

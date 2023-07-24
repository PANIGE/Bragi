import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Text } from '@chakra-ui/react';

import './fileUpload.css';

import workinprogressProjects from 'src/service/data.workinprogressProjects.js';

import Header from 'src/components/layout/header/Header';
import { ProjectCard } from 'src/components/layout/project/cards/ProjectCard';


function UploadButton() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileRemove = (fileName) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <input type="file" multiple onChange={handleFileUpload} />
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index} onClick={() => handleFileRemove(file.name)}>
            {file.name}
          </li>
        ))}
      </ul>
      <button onClick={() => console.log(selectedFiles)}>Upload</button>
    </div>
  );
}



export function FileUpload() {

  const currentProjects = workinprogressProjects.find((project) => project.id === 3);

  if (!currentProjects) {
    return <div>None</div>;
  }

  const { name, tasks } = currentProjects;

  // Filtrer les tâches en "En attente de réalisation"
  const pendingTasks = tasks.filter((task) => task.status === "En attente de réalisation");

  return (
    <div className="fileUploadContainer">
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
              <BreadcrumbLink>Ajouter des rushs vidéo</BreadcrumbLink>
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
      <div className="contentHeader">
        <h2>Ajouter des rushs vidéo</h2>
        <Text fontSize='6xl' lineHeight={1.6} textAlign='left' fontWeight='bold' color='gray.700'>
          Ajoutez vos rushs vidéo pour le projet <span style={{ color: "var(--blue-450)" }}>{name}</span>
        </Text>
      </div>
      <div className="fileUploadContent">
        <div className="leftContent">
          <div className="projrctCardUpload">
            <ProjectCard
              key={currentProjects.id}
              creationDate={currentProjects.date}
              name={currentProjects.name}
              participants={[
                { name: currentProjects.régisseur, role: "Régisseur", avatarSrc: "url_de_l_avatar" },
                { name: currentProjects.marketing, role: "Marketing", avatarSrc: "url_de_l_avatar" },
                { name: currentProjects.traducteur, role: "Traducteur", avatarSrc: "url_de_l_avatar" },
                { name: currentProjects.monteur, role: "Monteur", avatarSrc: "url_de_l_avatar" },
                { name: currentProjects.cameraman, role: "Cameraman", avatarSrc: "url_de_l_avatar" },
                { name: currentProjects.rédacteur, role: "Rédacteur", avatarSrc: "url_de_l_avatar" },
              ]}
              description={currentProjects.description}
              state={currentProjects.status}
            />
            <>
              <span className="projectCardDescriptionTitle">Prochaines étapes</span>
              <div className="projectCardDescription">
                {pendingTasks.map((task, index) => (
                  <div className="projectCardDescriptionTask" key={index}>
                    <span className="taskName">{index + 1}. {task.name}</span>
                    <span className="taskDescription">{task.description}</span>
                  </div>
                ))}

              </div>
            </>
          </div>
        </div>
        <div className="rightContent">
        </div>
      </div>
    </div>
  );
}
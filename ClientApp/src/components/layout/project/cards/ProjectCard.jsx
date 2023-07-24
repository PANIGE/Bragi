import React from 'react';
import { Avatar, AvatarGroup } from "@chakra-ui/react"

import defaultImage from 'src/assets/img/preview-min.jpeg';

export function ProjectCard({ creationDate, name, image, participants, state, description }) {
  // 3 états : En cours, terminé, à venir with différentes couleurs
  const stateColor = () => {
    switch (state) {
      case "En cours":
        return "#FFA500";
      case "terminé":
        return "#4ECD00";
      case "A venir":
        return "#0094FF";
      default:
        return "#0094FF";
    }
  };

  const directors = participants.filter(participant => participant.role === "Régisseur");

  return (
        <div className="projectCard" style={{ width: "100%" }}>
          <div className="projectCardHeader">
            <span className="date" style={{ color: stateColor(), backgroundColor: stateColor() + "33" }}>
              {creationDate}
            </span>
            <button className="projectCardButton">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <span className="projectCardTitle">{name}</span>

          {image ? (
            <span className="projectCardImg" style={{ backgroundImage: `url(${image})` }}></span>
          ) : (
            <span className="projectCardImg" style={{ backgroundImage: `url(${defaultImage})` }}></span>
          )}
          
          <div className="projectCardTeam">
            <div className="projectCardTeamMember">
              <div className="memberContainer">
                <AvatarGroup size='sm' max={2}>
                  {participants.map((participant, index) => (
                    <Avatar key={index} name={participant.name} src={participant.avatarSrc} />
                  ))}
                </AvatarGroup>
              </div>
              {directors.map((director, index) => (
                <div className="memberContainer" key={index}>
                  {director.role} : <Avatar name={director.name} src={director.avatarSrc} size='sm' />
                </div>
              ))}
            </div>
          </div>
          {
            description && (
              <div className="projectCardDescription">
                <span className="projectCardDescriptionTitle">Description</span>
                <span className="projectCardDescriptionText">{description}</span>
              </div>
            )
          }
        </div>
  );
}

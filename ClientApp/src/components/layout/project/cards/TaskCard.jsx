import React from "react";
import { Button } from "@chakra-ui/react";

export function TaskCard({ state, username, role }) {
  const stateColor = () => {
    switch (state) {
      case "En attente de validation":
        return "#FFA500";
      case "En attente de réalisation":
        return "#4ECD00";
      case "Tâches terminées":
        return "#0094FF";
      default:
        return "#0094FF";
    }
  };
  

  return (
    <div className="taskCard">
      <div className="projectCardHeader">
        <span
          className="date"
          style={{ color: stateColor(), backgroundColor: stateColor() + "33" }}
        >
          {role}
        </span>
        <button className="projectCardButton">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <span className="taskCardTitle">{username}</span>

      {state === "En attente de validation" && (
        <div className="taskCardFooter">
          <Button colorScheme="red" variant="solid" size="sm">
            visualiser le rendu
          </Button>
          <i className="fa-sharp fa-light fa-eye fa-beat-fade red fa-xl"></i>
        </div>
      )}
    </div>
  );
}

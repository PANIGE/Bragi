import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

export default function Header({leftContent, children, rightContent}) {
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);

  const handleSettingsMouseEnter = () => {
    setIsSettingsHovered(true);
  };

  const handleSettingsMouseLeave = () => {
    setIsSettingsHovered(false);
  };

  return (
    <div className="headerContainer">
      <div className="headerNav">
        <div className="pagePath">
          {leftContent}
        </div>
        <div className="headerNavLinks">
          {rightContent}
        </div>
      </div>
    </div>
  );
}

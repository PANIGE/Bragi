import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SmartButton from '../../base/Button.jsx';

import './header.css';

export function Header( { page } ) {
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
        <h2>{page}</h2>
        <div className="headerNavLinks">
          <NavLink  to="/new-projects" className="headerNavLink">Nouveau</NavLink>
          <NavLink
            to="/profil"
            className={`btn-black ${isSettingsHovered ? 'activeHeaderNavLink' : ''}`}
            style={{
              height: '50px',
              width: '50px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onMouseEnter={handleSettingsMouseEnter}
            onMouseLeave={handleSettingsMouseLeave}
          >

            <i
              className={`fa-sharp fa-light fa-gear-complex fa-xl ${isSettingsHovered ? 'fa-spin' : ''}`}
            ></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

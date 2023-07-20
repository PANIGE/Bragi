import React from 'react';

import './button.css';

const SmartButton = ({
  iconClass,
  color = 'blue', // Default color is 'blue'
  onClick,
  width = 140,
  height = 40,
  children,
}) => {
  const availableColors = [
    'blue',
    'red',
    'green',
    'orange',
    'gray',
    'transparent',
  ];
  
  if (!availableColors.includes(color)) {
    color = 'blue';
  }

  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  // Adding the class based on the chosen color
  const buttonClass = `btn-${color}`;


  const iconStyle = {
    marginRight: '5px',
    color: `var(--${color}-100)`, // Use color prop for icon color
  };

  const handleButtonClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={buttonClass} // Adding the class based on the chosen color
      style={buttonStyle}
      onClick={handleButtonClick}
    >
      {iconClass && <i className={`${iconClass} ${iconStyle.color ? 'custom-color' : ''}`} style={iconStyle} />}
      {children}
    </button>
  );
};

export default SmartButton;

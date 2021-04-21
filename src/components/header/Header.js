import React from 'react';
import './Header.style.scss';

function Header(props) {
  const { value } = props; 
  return(
    <div className="header">
      {value}
    </div>
  );
}

export { Header };
import React from 'react';

function Header(props) {
  const { value } = props; 
  return(
    <div className="header">
      {value}
    </div>
  );
}

export { Header };
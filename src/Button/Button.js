import React from 'react';

function Button(props) {
  const { id, name, onNavigationClick } = props;
 return(
   <button type="button" onClick={() => onNavigationClick(id)}>{name}</button>
 );
}

export { Button };
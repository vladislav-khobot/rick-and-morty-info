import React from 'react';

function Button(props) {
  const { id, name, onClick } = props;
 return(
   <button type="button" onClick={() => onClick(id)}>{name}</button>
 );
}

export { Button };
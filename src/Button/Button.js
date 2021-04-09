import React from 'react';

function Button(props) {
  const { name } = props;
 return(
   <button type="button">{name}</button>
 );
}

export { Button };
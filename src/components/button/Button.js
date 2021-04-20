import React, { useCallback } from 'react';

function Button(props) {
  const { id, name, onClick } = props;

  const buttonClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return(
    <button type="button" onClick={buttonClick}>{name}</button>
  );
}

export { Button };
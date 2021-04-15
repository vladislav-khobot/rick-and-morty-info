import React, { useCallback, useState } from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

function InfoPage(props) {

  const [ prevPage, setPrevPage ] = useState(null);
  const [ nextPage, setNextPage ] = useState(null);

  const [ currentID, setCurrentID ] = useState(null);

  function onPageChange(currentPage) {
    setPrevPage(currentPage.prev);
    setNextPage(currentPage.next);
  }

  const onCharacterClick = useCallback((id) => {
    setCurrentID(id);
  },[setCurrentID]);

  return(
    <div className="info-page">
      <CharactersList onPageChange={onPageChange} onClick={onCharacterClick} />
      <CharactersInfo currentID={currentID}/>  
    </div>
  );
}

export { InfoPage };
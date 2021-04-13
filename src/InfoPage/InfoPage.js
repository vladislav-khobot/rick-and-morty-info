import React, { useState } from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

function InfoPage(props) {

  const [ prevPage, setPrevPage ] = useState(null);
  const [ nextPage, setNextPage ] = useState(null);

  function onPageChange(currentPage) {
    setPrevPage(currentPage.prev);
    setNextPage(currentPage.next);
  }

  return(
    <div className="info-page">
      <CharactersList onPageChange={onPageChange} />
      <CharactersInfo />  
    </div>
  );
}

export { InfoPage };
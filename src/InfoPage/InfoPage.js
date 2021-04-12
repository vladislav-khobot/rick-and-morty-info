import React, { useState } from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

function InfoPage(props) {

  const { prevPage, setPrevPage} = useState(null);
  const { nextPage, setNextPage} = useState(null);


  return(
    <div className="info-page">
      <CharactersList prevPage={prevPage} nextPage={nextPage} />
      <CharactersInfo />  
    </div>
  );
}

export { InfoPage };
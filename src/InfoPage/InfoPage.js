import React from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

function InfoPage(props) {
  return(
    <div className="info-page">
      <CharactersList />
      <CharactersInfo />  
    </div>
  );
}

export { InfoPage };
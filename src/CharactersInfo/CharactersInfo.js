import { React } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';

function CharactersInfo(props) {
  return (
    <div className="characters-info">
      <FindInfo/>
      <CharacterData/>
    </div>
  );
}

export { CharactersInfo };
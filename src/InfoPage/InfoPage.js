import React, { useCallback, useState } from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

function InfoPage(props) {

  const [ currentID, setCurrentID ] = useState(null);

  const onChangeID = useCallback((id) => {
    setCurrentID(id);
  },[setCurrentID]);

  return(
    <div className="info-page">
      <CharactersList onClick={onChangeID} />
      <CharactersInfo currentID={currentID}/>  
    </div>
  );
}

export { InfoPage };
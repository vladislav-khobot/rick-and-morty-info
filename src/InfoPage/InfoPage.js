import React, { useCallback, useState } from 'react';
import { CharactersList } from '../CharactersList';
import { CharactersInfo } from '../CharactersInfo';

const OnClickContext = React.createContext();

function InfoPage(props) {
  const [ currentID, setCurrentID ] = useState(null);

  const onChangeID = useCallback((id) => {
    setCurrentID(id);
  },[setCurrentID]);

  return(
    <div className="info-page">
      <OnClickContext.Provider value={onChangeID}>
        <CharactersList/>
      </OnClickContext.Provider>
      <CharactersInfo currentID={currentID}/>  
    </div>
  );
}

export { InfoPage, OnClickContext };
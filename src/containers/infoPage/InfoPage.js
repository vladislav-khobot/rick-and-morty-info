import React, { useCallback, useState } from 'react';
import { CharactersList } from '../charactersList';
import { CharactersInfo } from '../charactersInfo';

const InfoPageContext = React.createContext();

function InfoPage() {
  const [ currentID, setCurrentID ] = useState(null);

  const onChangeID = useCallback((id) => {
    setCurrentID(id);
  },[setCurrentID]);

  return(
    <div className="info-page">
      <InfoPageContext.Provider value={ { currentID, onChangeID} }>
        <CharactersList/>
        <CharactersInfo/>
      </InfoPageContext.Provider>  
    </div>
  );
}

export { InfoPage, InfoPageContext };
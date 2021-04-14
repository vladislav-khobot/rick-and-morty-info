import { React, useState, useCallback, useEffect } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';
import { getCharacterInfo } from '../api';

function CharactersInfo(props) {

  const [ characterID, setCharacterID ] = useState(null);
  const [ characterInfo, setCharacterInfo ] = useState({});

  const onChange = useCallback((event) => {
    
    const currentID = event.target.valueAsNumber;
    if(currentID) {
      setCharacterID(currentID);
    }

  },[setCharacterID]);

  const onClick = useCallback( async () => {
    console.log('click!');
    const responseData = await getCharacterInfo(characterID);
    if (!responseData) {
      setCharacterInfo({});
      return;
    }

    if (responseData.error) {
      setCharacterInfo({});
      console.log(responseData.error);
      return;
    } 

    setCharacterInfo(responseData);

  },[characterID]);

  return (
    <div className="characters-info">
      <FindInfo onChange={onChange} onClick={onClick}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
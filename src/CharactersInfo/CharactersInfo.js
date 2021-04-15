import { React, useState, useCallback, useEffect } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';
import { getCharacterInfo } from '../api';

function CharactersInfo(props) {

  const { currentID } = props;

  const [ characterID, setCharacterID ] = useState(null);
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ toggleActive, setToggleActive ] = useState(false);

  // setToggleActive(!toggleActive); console.log(toggleActive);
  const onChange = useCallback((event) => {
    
    const currentID = event.target.valueAsNumber;
    if(!currentID) {
      setCharacterID(null);  
      return;
    }

    setCharacterID(currentID);

  },[setCharacterID]);

  const onClick = useCallback( async () => { console.log(characterID);
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

  useEffect(() => {
    if(currentID) {
      setCharacterID(currentID);
      onClick();
    }
  },[currentID, onClick]);

  return (
    <div className="characters-info">
      <FindInfo onChange={onChange} onClick={onClick}/>
      <CharacterData characterInfo={characterInfo} toggleActive={toggleActive}/>
    </div>
  );
}

export { CharactersInfo };
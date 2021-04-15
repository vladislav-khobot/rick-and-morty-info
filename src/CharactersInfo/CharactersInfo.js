import { React, useState, useCallback, useEffect } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';
import { getCharacterInfo } from '../api';

function CharactersInfo(props) {

  const { currentID, onChangeID } = props;
  const [ characterInfo, setCharacterInfo ] = useState({});


  const onChange = useCallback((event) => {
    
    const targetID = event.target.valueAsNumber;
    if(!targetID) {
      onChangeID(null);  
      return;
    }

    onChangeID(targetID);

  },[onChangeID]);

  const onClick = useCallback( async () => {
    const responseData = await getCharacterInfo(currentID);
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
  },[currentID]);

  useEffect(() => {
    if(currentID) {
      onClick();
    } 
  },[currentID, onClick]);

  return (
    <div className="characters-info">
      <FindInfo onChange={onChange} onClick={onClick}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
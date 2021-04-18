import { React, useState, useEffect, useRef, useCallback } from 'react';
import { FindInfo } from '../../components/findInfo';
import { CharacterData } from '../characterData';
import { useCharacterInfo } from '../../hooks';

function CharactersInfo(props) {
  const { currentID } = props;
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ animate, setAnimate ] = useState(false);
  const [ idValue, setIdValue ] = useState(null);
  const updateCharacterData = useCharacterInfo({ idValue, setCharacterInfo });

  useEffect(() => { 
    // setIdValue(currentID);
    if(currentID) {
      updateCharacterData();
    } 
  },[currentID, updateCharacterData]);

  const clickWithAnimate = useCallback(async () => {
    setAnimate(!animate);
    updateCharacterData();
  }, [animate, setAnimate, updateCharacterData]);

  const updateIdValue = useCallback((newValue) => {
    setIdValue(newValue);
  },[setIdValue]);


  return (
    <div className="characters-info">
      <FindInfo idValue={idValue} updateIdValue={updateIdValue} onClick={clickWithAnimate}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
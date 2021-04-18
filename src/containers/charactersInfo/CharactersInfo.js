import { React, useState, useEffect, useRef, useCallback } from 'react';
import { FindInfo } from '../../components/findInfo';
import { CharacterData } from '../characterData';
import { useCharacterInfo } from '../../hooks';

function CharactersInfo(props) {
  const { currentID } = props;
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ animate, setAnimate ] = useState(false);
  const inputRef = useRef(null);
  const updateCharacterData = useCharacterInfo({ inputRef, setCharacterInfo });

  useEffect(() => { 
    inputRef.current.value = currentID;
    if(currentID) {
      updateCharacterData();
    } 
  },[currentID, updateCharacterData]);

  const clickWithAnimate = useCallback(async () => {
    setAnimate(!animate);
    updateCharacterData();
  }, [animate, setAnimate, updateCharacterData]);

  return (
    <div className="characters-info">
      <FindInfo onClick={clickWithAnimate} inputRef={inputRef}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
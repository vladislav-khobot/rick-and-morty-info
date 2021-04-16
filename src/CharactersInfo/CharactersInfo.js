import { React, useState, useEffect, useRef } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';
import { useCharacterInfo } from '../Hooks';

function CharactersInfo(props) {
  const { currentID } = props;
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ animate, setAnimate ] = useState(false);
  const inputRef = useRef(null);
  const onClick = useCharacterInfo({ inputRef, setCharacterInfo });

  useEffect(() => { 
    inputRef.current.value = currentID;
    if(currentID) {
      onClick();
    } 
  },[currentID, onClick]);

  async function clickWithAnimate() {
    await setAnimate(!animate);
    await onClick(); 
  }

  return (
    <div className="characters-info">
      <FindInfo onClick={clickWithAnimate} inputRef={inputRef}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
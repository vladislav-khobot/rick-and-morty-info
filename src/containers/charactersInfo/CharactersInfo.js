import { React, useState, useEffect, useCallback, useContext } from 'react';
import { FindInfo } from '../../components/findInfo';
import { CharacterData } from '../characterData';
import { useCharacterInfo } from '../../hooks';
import { InfoPageContext } from '../../containers/infoPage';

function CharactersInfo() {
  const { currentID, onChangeID } = useContext(InfoPageContext);
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ animate, setAnimate ] = useState(false);
  const updateCharacterData = useCharacterInfo({ idValue: currentID, setCharacterInfo });

  useEffect(() => { 
    if(currentID) {
      updateCharacterData();
    } 
  },[currentID, updateCharacterData]);

  const clickWithAnimate = useCallback(async (newID) => {
    onChangeID(newID);
    setAnimate(!animate);
  }, [animate, setAnimate, onChangeID]);


  return (
    <div className="characters-info">
      <FindInfo currentID={currentID} onClick={clickWithAnimate}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
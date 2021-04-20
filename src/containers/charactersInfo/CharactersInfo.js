import { React, useState, useEffect, useCallback, useContext } from 'react';
import { FindInfo } from '../../components/findInfo';
import { CharacterData } from '../characterData';
import { InfoPageContext } from '../../containers/infoPage';
import { useInfo } from '../../hooks/useInfo';

function CharactersInfo() {
  const { currentID, onChangeID } = useContext(InfoPageContext);
  const [ characterInfo, setCharacterInfo ] = useState({});

  const characterData = useInfo(currentID);

  useEffect(() => {
    if(characterData) {
      setCharacterInfo(characterData);
    }
  }, [characterData]);

  const clickWithAnimate = useCallback(async (newID) => {
    onChangeID(newID);
  }, [onChangeID]);

  return (
    <div className="characters-info">
      <FindInfo currentID={currentID} onClick={clickWithAnimate}/>
      <CharacterData characterInfo={characterInfo}/>
    </div>
  );
}

export { CharactersInfo };
import { React, useState, useCallback, useEffect, useRef } from 'react';
import { FindInfo } from '../FindInfo/FindInfo';
import { CharacterData } from '../CharacterData';
import { getCharacterInfo } from '../api';

function CharactersInfo(props) {

  const { currentID } = props;
  const [ characterInfo, setCharacterInfo ] = useState({});
  const inputRef = useRef(null);

  const [ animate, setAnimate ] = useState(false);

  const onClick = useCallback( async () => {
    const responseData = await getCharacterInfo(inputRef.current.value);
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
  },[inputRef]);

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
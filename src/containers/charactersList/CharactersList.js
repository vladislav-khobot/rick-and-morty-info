import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { ItemList } from '../../components/itemList';
import { NavigationButtons } from '../navigationButtons';
import { useCharactersList } from '../../hooks';

function CharactersList() {
  const [ charactersData, setCharactersData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState({
    prev: null,
    next: null,
  });

  const getCharactersData = useCharactersList({ currentPage, setCharactersData, setCurrentPage });

  const onNavigationClick = useCallback((btnID) => {
    getCharactersData (btnID);
  }, [getCharactersData]);

  useEffect(() => {
    getCharactersData();  
  }, []);

  return(
    <div className="charatcers-list">
      <Header value={"Choose character from list:"}/>
      <ul className="stars-list">
        {charactersData.map((character, i) => {
          return (
            <ItemList href={character.id} value={character.name} key={character.id}/>
          );
        })}
      </ul>
      <NavigationButtons onClick={onNavigationClick}/>
    </div>
  );
}

export { CharactersList };
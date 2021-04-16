import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { NavigationButtons } from '../NavigationButtons';
import { useCharactersList } from '../Hooks';

function CharactersList(props) {
  const { onClick } = props;
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
      <ul>
        {charactersData.map((character, i) => {
          return (
            <ItemList href={character.id} value={character.name} key={character.id} onClick={onClick}/>
          );
        })}
      </ul>
      <NavigationButtons onClick={onNavigationClick}/>
    </div>
  );
}

export { CharactersList };
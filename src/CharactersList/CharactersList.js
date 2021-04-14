import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { NavigationButtons } from '../NavigationButtons';
import { getCharactersList } from '../api';

function CharactersList(props) {

  const { onPageChange } = props;
  const [ charactersData, setCharactersData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState({
    prev: null,
    next: null,
  });

  const getCharactersData = useCallback(async (btnID = null) => {

    const responseData = await getCharactersList(btnID, currentPage);
    if (!responseData || !responseData.results) {
      return;
    }

    if (responseData.error) {
      console.log(responseData.error);
      return;
    } 

    setCharactersData(responseData.results);
    setCurrentPage(responseData.info);

  },[setCharactersData, currentPage]);

  const onNavigationClick = useCallback((btnID) => {
    getCharactersData (btnID);
    onPageChange(currentPage);
  }, [currentPage, getCharactersData, onPageChange]);

  useEffect(() => {
    getCharactersData();  
  }, []);

  return(
    <div className="charatcers-list">
      <Header value={"Choose character from list:"}/>
      <ul>
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
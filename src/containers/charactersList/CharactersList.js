import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { ItemList } from '../../components/itemList';
import { NavigationButtons } from '../navigationButtons';
import { useList } from '../../hooks/useList';
import './CharactersList.style.scss';

function CharactersList() {
  const [ btnID, setBtnID ] = useState(null);
  const [ charactersData, setCharactersData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState({
    prev: null,
    next: null,
  });

  const listData = useList({ btnID, currentPage });

  useEffect(() => {
    if(listData) {
      if(listData.results) {
        setCharactersData(listData.results);
      } 
  
      if (listData.error) {
        console.log(listData.error);
      }
    }
  }, [listData]);

  const onNavigationClick = useCallback((btnID) => {
    setBtnID(btnID);
    setCurrentPage(listData.info);
  }, [setBtnID, listData]);

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
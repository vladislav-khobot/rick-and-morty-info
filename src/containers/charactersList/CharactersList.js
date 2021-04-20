import React, { useCallback, useState } from 'react';
import { Header } from '../../components/header';
import { ItemList } from '../../components/itemList';
import { NavigationButtons } from '../navigationButtons';
import { useList } from '../../hooks/useList';

function CharactersList() {
  const [ charactersData, setCharactersData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState({
    prev: null,
    next: null,
  });
  const [ btnID, setBtnID ] = useState(null);

  const listData = useList({ btnID, currentPage }); // console.log(listData);
  if (listData && listData.results) {
    setCharactersData(listData.results);
    setCurrentPage(listData.info);
  }

  if (listData && listData.error) {
    console.log(listData.error);
  } 

  const onNavigationClick = useCallback((btnID) => {
    setBtnID(btnID);
  }, [setBtnID]);

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
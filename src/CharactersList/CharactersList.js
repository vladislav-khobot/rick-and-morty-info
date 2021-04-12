import React, { useState } from 'react';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { NavigationButtons } from '../NavigationButtons';
import { getCharactersList } from '../api';

function CharactersList(props) {

  // const { prevPage, nextPage } = props;
  const { charactersData, setCharactersData } = useState([]);

  async function getCharactersData (btnID = null) {

    const responseData = await getCharactersList(btnID);
    if (!responseData || !responseData.results) {
      return;
    }

    if (responseData.error) {
      console.log(responseData.error);
      return;
    } 

    setCharactersData(responseData.results);

  }

  getCharactersData();

  return(
    <div className="charatcers-list">
      <Header value={"Choose character from list:"}/>
      <ul>
        {/* {charactersData.map((character, i) => {
          return (
            <ItemList href={character.id} value={character.name} key={character.id}/>
          );
        })} */}
      </ul>
      <NavigationButtons/>
    </div>
  );
}

export { CharactersList };
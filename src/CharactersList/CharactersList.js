import React from 'react';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { NavigationButtons } from '../NavigationButtons';

function CharactersList(props) {
 return(
   <div className="charatcers-list">
    <Header value={"Choose character from list:"}/>
    <ul>
      <ItemList value={"test"}/>
    </ul>
    <NavigationButtons/>
   </div>
 );
}

export { CharactersList };
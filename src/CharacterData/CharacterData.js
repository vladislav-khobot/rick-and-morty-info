import React from 'react';
import { DataItem } from '../DataItem';

function CharacterData(props) {
 return(
  <form className="character-data">
   <div className="character-avatar"/>
   <div className="character-content">
    <DataItem title={'Info from server:'} value={''}/>
    <DataItem title={'ID:'} value={''}/>
    <DataItem title={'Name:'} value={''}/>
    <DataItem title={'Status:'} value={''}/>
    <DataItem title={'Species:'} value={''}/>
    <DataItem title={'Type:'} value={''}/>
    <DataItem title={'Gender:'} value={''}/>
    <DataItem title={'Origin name:'} value={''}/>
    <DataItem title={'Location name:'} value={''}/>
    <DataItem title={'Created:'} value={''}/>
   </div>
  </form>
 );
}

export { CharacterData };
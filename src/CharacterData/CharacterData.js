import React, { useCallback } from 'react';
import { DataItem } from '../DataItem';
import defaultImage from '../images/no-image-available.png';

const isEmptyObj = obj => !Object.keys(obj).length;

function CharacterData(props) {

  const { characterInfo, toggleActive } = props;

  const avatarStyle = useCallback(() => (
    { 
      backgroundImage: characterInfo.image ? `url('${characterInfo.image}')` : `url(${defaultImage})`,
    }
  ),[characterInfo]);

  return(
  <form className={toggleActive ? "character-data" : "character-data loaded"}>
    <div className="character-avatar" style={avatarStyle()}/>
    <div className="character-content">
      <DataItem title={'Info from server:'} value={(characterInfo && !isEmptyObj(characterInfo))  ? 'sucess!' : ''}/>
      <DataItem title={'ID:'} value={characterInfo.id ? characterInfo.id : ''}/>
      <DataItem title={'Name:'} value={characterInfo.name ? characterInfo.name : ''}/>
      <DataItem title={'Status:'} value={characterInfo.status ? characterInfo.status : ''}/>
      <DataItem title={'Species:'} value={characterInfo.species ? characterInfo.species : ''}/>
      <DataItem title={'Type:'} value={characterInfo.type ? characterInfo.type : ''}/>
      <DataItem title={'Gender:'} value={characterInfo.gender ? characterInfo.gender : ''}/>
      <DataItem title={'Origin name:'} value={characterInfo.origin ? characterInfo.origin.name : ''}/>
      <DataItem title={'Location name:'} value={characterInfo.location ? characterInfo.location.name : ''}/>
      <DataItem title={'Created:'} value={characterInfo.created ? `${characterInfo.created.slice(0, 10)} ${characterInfo.created.slice(11, 19)}` : ''}/>
    </div>
  </form>
  );
}

export { CharacterData };
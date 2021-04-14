import React, { useCallback } from 'react';
import { DataItem } from '../DataItem';

function CharacterData(props) {

  const { characterInfo } = props;

  const avatarStyle = useCallback(() => (
    { 
      backgroundImage: characterInfo.image ? `url('${characterInfo.image}')` : '../images/no-image-available.png',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'contain',
      // width: '220px',
      // height: '220px',
      // margin: '8px',
      // border: '1px grey solid',
    }
  ),[characterInfo]);

  return(
  <form className="character-data">
    {/* <div className="character-avatar"/> */}
    <div className="character-avatar" style={avatarStyle()}/>
    <div className="character-content">
    <DataItem title={'Info from server:'} value={characterInfo ? 'sucess!' : 'error...'}/>
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
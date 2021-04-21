import React, { useEffect, useRef } from 'react';
import { DataItem } from '../../components/dataItem';
import defaultImage from '../../assets/images/no-image-available.png';
import './CharacterData.style.scss';

const isEmptyObj = obj => !Object.keys(obj).length;

function CharacterData(props) {
  const { characterInfo } = props;
  const refAnimation = useRef(null);
  const backgroundImage = characterInfo.image ? characterInfo.image : defaultImage;

  useEffect(() => {
    refAnimation.current.classList.toggle('loaded');

    setTimeout(() => {
      refAnimation.current.classList.toggle('loaded');
    }, 500);
  },[characterInfo]);

  const isInfo = characterInfo && !isEmptyObj(characterInfo);

  return(
  <form ref={refAnimation} className={"character-data"}>
    <img src={backgroundImage} alt="" className="character-avatar"/>
    <div className="character-content">
      <DataItem title="Info from server:" value={isInfo ? "sucess!" : "no info..."}/>
      <DataItem title="ID:" value={isInfo ? characterInfo.id : ''}/>
      <DataItem title="Name:" value={isInfo ? characterInfo.name : ''}/>
      <DataItem title="Status:" value={isInfo ? characterInfo.status : ''}/>
      <DataItem title="Species:" value={isInfo ? characterInfo.species : ''}/>
      <DataItem title="Type:" value={isInfo ? characterInfo.type : ''}/>
      <DataItem title="Gender:" value={isInfo ? characterInfo.gender : ''}/>
      <DataItem title="Origin name:" value={isInfo ? characterInfo.origin.name : ''}/>
      <DataItem title="Location name:" value={isInfo ? characterInfo.location.name : ''}/>
      <DataItem title="Created:" value={isInfo ? `${characterInfo.created.slice(0, 10)} ${characterInfo.created.slice(11, 19)}` : ''}/>
    </div>
  </form>
  );
}

export { CharacterData };
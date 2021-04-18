import { useCallback } from 'react';
import { getCharacterInfo } from '../assets/api/api';

function useCharacterInfo(params) {
  const { idValue, setCharacterInfo } = params;
  return useCallback( async () => {
    const responseData = await getCharacterInfo(idValue);
    if (!responseData) {
      setCharacterInfo({});
      return;
    }

    if (responseData.error) {
      setCharacterInfo({});
      console.log(responseData.error);
      return;
    } 

    setCharacterInfo(responseData);
  },[idValue, setCharacterInfo]);
}

export { useCharacterInfo };
import { useCallback } from 'react';
import { getCharacterInfo } from '../api';

function useCharacterInfo(params) {
  const { inputRef, setCharacterInfo } = params;
  return useCallback( async () => {
    const responseData = await getCharacterInfo(inputRef.current.value);
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
  },[inputRef, setCharacterInfo]);
}

export { useCharacterInfo };
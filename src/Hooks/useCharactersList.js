import { useCallback } from 'react';
import { getCharactersList } from '../api';

function useCharactersList(params) {
  const { currentPage, setCharactersData, setCurrentPage } = params;
  return useCallback(async (btnID = null) => {

    const responseData = await getCharactersList(btnID, currentPage);
    if (!responseData || !responseData.results) {
      return;
    }

    if (responseData.error) {
      console.log(responseData.error);
      return;
    } 

    setCharactersData(responseData.results);
    setCurrentPage(responseData.info);

  },[setCharactersData, currentPage, setCurrentPage]);
}

export { useCharactersList };
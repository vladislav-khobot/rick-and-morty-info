import { useFetch } from "./useFetch";

const apiURL = 'https://rickandmortyapi.com/api';

function useInfo(characterID) {
  const url = characterID ?`${apiURL}/character/${characterID}` : '';
  return useFetch(url);
}

export { useInfo };
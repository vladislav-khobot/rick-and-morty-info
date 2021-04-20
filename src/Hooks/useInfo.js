import { useFetch } from "./useFetch";

const apiURL = 'https://rickandmortyapi.com/api';

function useInfo(characterID) {
  const url = `${apiURL}/character/${characterID}`;
  return useFetch(url);

}

export { useInfo };
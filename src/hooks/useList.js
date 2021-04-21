import { useFetch } from "./useFetch";

const apiURL = 'https://rickandmortyapi.com/api';

function useList(params) {
  const { btnID, currentPage } = params;

  let url = `${apiURL}/character`;;

  if(currentPage) {
    if (btnID === 'btnPrev') {
      url = currentPage.prev ? currentPage.prev : '';
    } else if (btnID === 'btnNext') {
      url = currentPage.next ? currentPage.next : '';
    }
  }

  return useFetch(url);
}

export { useList };
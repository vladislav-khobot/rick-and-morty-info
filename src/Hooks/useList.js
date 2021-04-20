import { useFetch } from "./useFetch";

const apiURL = 'https://rickandmortyapi.com/api';

function useList(params) {
  const { btnID, currentPage } = params;

  let url = null;

  if (btnID === 'btnPrev') {
    url = currentPage.prev ? currentPage.prev : '';
  } else if (btnID === 'btnNext') {
    url = currentPage.next ? currentPage.next : '';
  } else {
    url = `${apiURL}/character`;
  }

  return useFetch(url);
}

export { useList };
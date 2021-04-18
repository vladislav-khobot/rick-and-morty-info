const apiURL = 'https://rickandmortyapi.com/api';
const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',  
}

async function getCharactersList(btnID = null, currentPage) {
  let url = null;

  if (btnID === 'btnPrev') {

    if (!currentPage.prev) {
      return;
    }
    url = currentPage.prev;

  } else if (btnID === 'btnNext') {

    if (!currentPage.next) {
      return;
    }
    url = currentPage.next;

  } else {
    url = `${apiURL}/character`;
  }

  try {

    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    return response.json();

  } catch(error) {
      return error;
  }
}

async function getCharacterInfo(characterID) {
  try {

    const response = await fetch(`${apiURL}/character/${characterID}`, {
      method: 'GET',
      headers: headers,
    });

    return response.json();

  } catch(error) {
      return error;
  }
}

export { getCharactersList, getCharacterInfo };
const apiURL = 'https://rickandmortyapi.com/api';

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',  
}

async function getCharactersList(btnID = null, currentPage = null) {
  
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

async function getCharactersInfo(personID) {

  try {

    const response = await fetch(`${apiURL}/character/${personID}`, {
      method: 'GET',
      headers: headers,
    });

    return response.json();

  } catch(error) {
      return error;
  }

}

export { getCharactersList, getCharactersInfo };

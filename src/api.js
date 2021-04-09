const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',  
}

async function getPersonsList(btnID = null) {
  
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

async function getPersonInfo(personID) {

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

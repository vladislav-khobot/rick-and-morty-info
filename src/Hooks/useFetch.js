import { useEffect, useState } from "react";

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',  
}

function useFetch(url) {

  const [ result, setResult ] = useState(null);

  useEffect(() => {

    const res = async () => {
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

    setResult(res());

  }, [url]);

  return result;

}

export { useFetch };
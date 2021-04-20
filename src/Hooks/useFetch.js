import { useEffect, useState } from "react";

const headers = {
  'content-type': 'application/json',
  'accept': 'application/json',  
}

function useFetch(url) {
  const [ result, setResult ] = useState(null);

  useEffect(() => {
    
    const startFetch = async () => {
      try {

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });

        const result = await response.json();
        setResult(result); 
    
      } catch(error) {
        setResult(error);
      }
    }
    
    startFetch();

  }, [url]);

  return result;
}

export { useFetch };
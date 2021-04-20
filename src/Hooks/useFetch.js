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

        return await response.json(); 
    
      } catch(error) {
          return error;
      }
    }
    
    setResult(res());

  }, [url, setResult]);

  console.log(result);
  return result;
}

export { useFetch };
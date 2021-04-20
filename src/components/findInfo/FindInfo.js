import React, { useCallback, useEffect, useState } from 'react';

function FindInfo(props) {
  const { currentID, onClick } = props;
  const [ idValue, setIDValue ] = useState("");

  const onInputChange = useCallback((event) => {
    setIDValue(event.target.value);
  }, [setIDValue]);

  useEffect(() => {
    setIDValue(currentID);
  },[currentID]);

  const submitID = useCallback(() => {
    onClick(idValue);  
  },[idValue, onClick]);

  return(
    <div className="find-info">
      <label htmlFor="idPersonInput" className="find-by-id-element">
        Enter ID a person, whose you want to find:
      </label>
      <input type="number" id="idPersonInput" value={idValue ? idValue : ""} onChange={onInputChange} className="find-by-id-element"/>
      <button type="button" onClick={submitID}>
        Find info
      </button>
    </div>
  );
}

export { FindInfo };
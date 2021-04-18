import React, { useCallback } from 'react';

function FindInfo(props) {
  const { idValue, updateIdValue, onClick } = props;

  const onInputChange = useCallback((event) => {
    updateIdValue(event.target.value);
  }, [updateIdValue]);

  return(
    <div className="find-info">
      <label htmlFor="idPersonInput" className="find-by-id-element">
        Enter ID a person, whose you want to find:
      </label>
      <input type="number" id="idPersonInput" value={idValue ? idValue : ""} onChange={onInputChange} className="find-by-id-element"/>
      <button type="button" onClick={onClick}>
        Find info
      </button>
    </div>
  );
}

export { FindInfo };
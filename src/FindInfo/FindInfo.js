import React from 'react';

function FindInfo(props) {

  const { onChange, onClick } = props;

  return(
    <div className="find-info">
      <label htmlFor="idPersonInput" className="find-by-id-element">
        Enter ID a person, whose you want to find:
      </label>
      <input type="number" id="idPersonInput" className="find-by-id-element" onChange={onChange}/>
      <button type="button" onClick={onClick}>
        Find info
      </button>
    </div>
  );
}

export { FindInfo };
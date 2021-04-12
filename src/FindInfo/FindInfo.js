import { React } from 'react';

function FindInfo(props) {
  return(
    <div className="find-info">
      <label htmlFor="idPersonInput" className="find-by-id-element">
        Enter ID a person, whose you want to find:
      </label>
      <input type="number" id="idPersonInput" className="find-by-id-element"/>
      <button type="button">
        Find info
      </button>
    </div>
  );
}

export { FindInfo };
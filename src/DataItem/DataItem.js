import React from 'react';

function DataItem(props) {
 return(
  <div>
    {props.title} 
    <span>
      {props.value}
    </span>
  </div>
 );
}

export { DataItem };
import React from 'react';

function DataItem(props) {
 const { title, value} = props;
 return(
  <div>
    {title} 
    <span>
      {value}
    </span>
  </div>
 );
}

export { DataItem };
import React from 'react';
import './DataItem.style.scss';

function DataItem(props) {
 const { title, value} = props;
 return(
  <div>
    {title} 
    <span className="data-item-value">
      {value}
    </span>
  </div>
 );
}

export { DataItem };
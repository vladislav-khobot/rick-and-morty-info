import React from 'react';

function ItemList(props) {
 const { value } = props;
 return(
   <li>
    <a href={value}>Test</a>
   </li>
 );
}

export { ItemList };
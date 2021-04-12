import React from 'react';

function ItemList(props) {
 const { href, value } = props;
 return(
   <li key={href}>
    <a href={`#${href}`}>{value}</a>
   </li>
 );
}

export { ItemList };
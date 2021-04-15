import React from 'react';

function ItemList(props) {
 const { href, value, onClick } = props;
 return(
   <li key={href}>
    <a href={`#${href}`} onClick={() => onClick(href)}>{value}</a>
   </li>
 );
}

export { ItemList };
import React, { useContext } from 'react';
import { OnClickContext } from '../InfoPage';

function ItemList(props) {
  const { href, value } = props;
  const onClick = useContext(OnClickContext);
  return(
    <li key={href}>
    <a href={`#${href}`} onClick={() => onClick(href)}>{value}</a>
    </li>
  );
}

export { ItemList };
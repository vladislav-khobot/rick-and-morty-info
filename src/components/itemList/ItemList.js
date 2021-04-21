import React, { useCallback, useContext } from 'react';
import { InfoPageContext } from '../../containers/infoPage';
import './ItemList.style.scss';

function ItemList(props) {
  const { href, value } = props;
  const { currentID, onChangeID } = useContext(InfoPageContext);
  const linkStyle = currentID === href ? "active-link" : "";

  const onClick = useCallback(() => {
    onChangeID(href);
  }, [href, onChangeID]);

  return(
    <li key={href} className={linkStyle}>
      <a href={`#${href}`} onClick={onClick}>{value}</a>
    </li>
  );
}

export { ItemList };
import { React } from 'react';
import { Button } from '../Button';

function NavigationButtons(props) {

  const { onNavigationClick } = props;

  return(
    <div className="NavigationButtons">
      <Button id="btnPrev" name="Prev" onNavigationClick={onNavigationClick}/>
      <Button id="btnNext" name="Next" onNavigationClick={onNavigationClick}/>  
    </div>
  );
}

export { NavigationButtons };
import { React } from 'react';
import { Button } from '../Button';

function NavigationButtons(props) {
  return(
    <div className="NavigationButtons">
      <Button name="Prev"/>
      <Button name="Next"/>  
    </div>
  );
}

export { NavigationButtons };
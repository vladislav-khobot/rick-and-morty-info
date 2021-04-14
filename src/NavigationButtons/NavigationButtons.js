import { React } from 'react';
import { Button } from '../Button';

function NavigationButtons(props) {

  const { onClick } = props;

  return(
    <div className="NavigationButtons">
      <Button id="btnPrev" name="Prev" onClick={onClick}/>
      <Button id="btnNext" name="Next" onClick={onClick}/>  
    </div>
  );
}

export { NavigationButtons };
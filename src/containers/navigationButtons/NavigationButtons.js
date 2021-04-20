import { React } from 'react';
import { Button } from '../../components/button';

function NavigationButtons(props) {
  const { onClick } = props;
  return(
    <div className="navigation-buttons">
      <Button id="btnPrev" name="Prev" onClick={onClick}/>
      <Button id="btnNext" name="Next" onClick={onClick}/>  
    </div>
  );
}

export { NavigationButtons };

import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

import './Fave.css';

function Fave({ isFave = false, handleClick }) {
  return (
    <>
      {isFave && 
        <img src={heartFill} 
          className="fave-img" 
          alt="unfavorite icon" 
          onClick={handleClick}
          aria-label="remove from favorites" 
          tabIndex="0" />}

      {!isFave && 
        <img src={heartStroke} 
        className="fave-img" 
        alt="favorite icon" 
        onClick={handleClick}
        aria-label="add to favorites" 
        tabIndex="0" />}
    </>
  )
}

export default Fave;

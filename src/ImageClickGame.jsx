import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClickableArea from './ClickableArea';
import image from './images/disney-springs-map-mickey-central.jpg';

function ImageClickGame() {
  const [message, setMessage] = useState('Where did we eat at Disney World? >:l');
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const [clickableAreaProps, setClickableAreaProps] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const originalWidth = 2560;
  const originalHeight = 1168;

  const handleAreaClick = () => {
    setMessage('You\'re on the right track!');
    setTimeout(() => {
      navigate('/namecheck');
    }, 2000);
  };

  const handleWrongClick = () => {
    setMessage('You\'re not my valentine! :(');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const updateClickableArea = () => {
    if (imgRef.current) {
      const scaleFactorX = imgRef.current.clientWidth / originalWidth;
      const scaleFactorY = imgRef.current.clientHeight / originalHeight;

      const newX = 716 * scaleFactorX;
      const newY = 572 * scaleFactorY;
      const newWidth = 65 * scaleFactorX;
      const newHeight = 36 * scaleFactorY;

      setClickableAreaProps({ x: newX, y: newY, width: newWidth, height: newHeight });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateClickableArea);

    return () => window.removeEventListener('resize', updateClickableArea);
  }, []); 

  return (
    <div>
      <p>{message}</p>
      <div style={{ position: 'relative' }} onClick={handleWrongClick}>
        <img
          ref={imgRef}
          src={image}
          alt="Clickable"
          style={{ width: '100%', maxWidth: '1600px' }}
          onLoad={updateClickableArea} 
        />
        <ClickableArea {...clickableAreaProps} onAreaClick={handleAreaClick} />
      </div>
    </div>
  );
}

export default ImageClickGame;

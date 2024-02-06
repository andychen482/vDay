import React from 'react';

function ClickableArea({ x, y, width, height, onAreaClick }) {
    const handleClick = (e) => {
      e.stopPropagation(); 
      onAreaClick();
    };
  
    const style = {
      position: 'absolute',
      top: y,
      left: x,
      width: width,
      height: height,
      cursor: 'pointer',
      backgroundColor: 'rgba(255,0,0,0)', 
      cursor: 'auto',
    };
  
    return (
      <div style={style} onClick={handleClick}></div>
    );
  }
  

export default ClickableArea;

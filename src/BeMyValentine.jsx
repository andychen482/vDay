import React, { useState } from 'react';
import './App.css';
import catFlower from './images/catflower.jpg';
import shockedCat from './images/shockedCat.jpg';
import danceGif from './images/dance.gif';

function ValentinesProposal() {
  const [message, setMessage] = useState('Will you be my Valentine?');
  const [imageSrc, setImageSrc] = useState(catFlower);
  const [buttonVisibility, setButtonVisibility] = useState({ yes: true, no: true });
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noResponses, setNoResponses] = useState(0);
  const responses = ['Press yes', 'You\'re rude :(', 'Stop :(', 'Are you sure? :(', 'You can\'t say no :('];
  const [yesButtonSize, setYesButtonSize] = useState(100);

  const handleNoClick = () => {
    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 50;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    setImageSrc(shockedCat);
    setNoResponses(noResponses + 1);
    setMessage(responses[noResponses % responses.length]);
    setNoButtonStyle({
      position: 'absolute',
      left: randomX + 'px',
      top: randomY + 'px',
    });

    setYesButtonSize(currentSize => currentSize + 10);
  };

  const handleYesClick = () => {
    setMessage('Yay!!!!!!!!!!!!!!!');
    setImageSrc(danceGif);
    setButtonVisibility({ yes: false, no: false });
  };

  return (
    <div className="container">
      <div className="Mainprompt">
        <img className="image" src={imageSrc} alt="Reaction"></img>
        <h1 className="hh">{message === 'Will you be my Valentine?' ? 'You Passed!!\nHey beautiful!' : ''}</h1>
        <p className="pp">{message}</p>
        <div className="buttons">
          {buttonVisibility.no && (
            <button id="no-button" style={noButtonStyle} onClick={handleNoClick}>No</button>
          )}
          {buttonVisibility.yes && (
            <button 
              onClick={handleYesClick} 
              id="yesButton" 
              style={{ fontSize: `${yesButtonSize}%` }}
            >
              Yes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ValentinesProposal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "./images/muffin.jpg";
import redCup from "./images/cupcake.jpg";
import honeybun from "./images/honeybun.jpg";
import honey from "./images/honey.jpg";
import cookie from "./images/cookie.jpg";

function NameCheck() {
  const [message, setMessage] = useState("What are you?");
  const navigate = useNavigate();

  const handleImageClick = (isCorrect) => {
    if (isCorrect) {
      setMessage("Good job!!");
      setTimeout(() => {
        navigate("/valentine");
      }, 2000);
    } else {
      setMessage("No >:l");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      <h2>{message}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', alignItems: 'center' }}> {/* Adjusted for better spacing */}

        <img
          src={honey}
          alt="Honey"
          style={{ width: "200px", cursor: "pointer", height: 'auto' }}
          onClick={() => handleImageClick(false)}
        />
        <img
          src={cookie}
          alt="Cookie"
          style={{ width: "200px", cursor: "pointer", height: 'auto' }}
          onClick={() => handleImageClick(false)}
        />
        <img
            src={honeybun}
            alt="Honeybun"
            style={{ width: "200px", cursor: "pointer", height: 'auto' }}
            onClick={() => handleImageClick(false)}
        />
        <img
          src={image}
          alt="Muffin"
          style={{ width: "200px", cursor: "pointer", height: 'auto'}}
          onClick={() => handleImageClick(true)}
        />
        <img
          src={redCup}
          alt="Cupcake"
          style={{ width: "200px", cursor: "pointer", height: 'auto'}}
          onClick={() => handleImageClick(false)}
        />
      </div>
    </div>
  );
}

export default NameCheck;

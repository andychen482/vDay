import React, { useEffect, useState } from "react";
import {
  HashRouter as Router, // Changed from BrowserRouter to HashRouter
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import ImageClickGame from "./ImageClickGame";
import ValentinesProposal from "./BeMyValentine";
import NameCheck from "./NameCheck";
import image from "./image.jpg";
import backgroundAudio from "./audio/toontown.mp3";

function Header({ onPlayMusic }) {
  let location = useLocation();
  const navigate = useNavigate();
  const showHeader = location.pathname === "/";
  useEffect(() => {
    navigate("/");
  }, []);

  useEffect(() => {
    if (location.pathname === "/disney") {
      onPlayMusic();
    }
  }, [location.pathname, onPlayMusic]);

  return showHeader ? (
    <header className="App-header">
      <h1>Are you my valentine???</h1>
      <h2>Answer these questions to find out</h2>
      <nav>
        <ul>
          <li>
            <Link to="/disney">Start</Link>
          </li>
        </ul>
      </nav>
    </header>
  ) : null;
}

function App() {
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const audioInstance = new Audio(backgroundAudio);
    audioInstance.loop = true;

    if (audioPlayed) {
      audioInstance.play().catch((error) => console.log("Play error:", error));
    }

    return () => audioInstance.pause();
  }, [audioPlayed]);

  const handlePlayMusic = () => {
    setAudioPlayed(true);
  };

  return (
    <Router>
      {" "}
      <div
        className="App"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header onPlayMusic={handlePlayMusic} />
        <Routes>
          <Route path="/disney" element={<ImageClickGame />} />
          <Route path="/namecheck" element={<NameCheck />} />
          <Route path="/valentine" element={<ValentinesProposal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

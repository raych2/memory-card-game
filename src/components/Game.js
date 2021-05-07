import React, { useState } from "react";
import unicorns from "../images/imageData";
import Scoreboard from "./Scoreboard";

const Game = () => {
  const [currentCards, setCurrentCards] = useState(unicorns);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="Game">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="cardDisplay">
        {currentCards.map((card) => {
          return (
            <div key={`unicorn-${card.id}`} className="card">
              <img src={card.name} alt={card.text}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;

import React, { useState } from "react";
import unicorns from "../images/imageData";
import Scoreboard from "./Scoreboard";

const Game = () => {
  const [currentCards, setCurrentCards] = useState(unicorns);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="CardDisplay">
      {currentCards.map((card) => {
        return (
          <div key={`unicorn-${card.id}`}>
            <img src={card.name}></img>
          </div>
        );
      })}
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
};

export default Game;

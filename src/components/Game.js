import React, { useState } from "react";
import unicorns from "../images/imageData";
import Scoreboard from "./Scoreboard";

const Game = () => {
  const [currentCards, setCurrentCards] = useState(unicorns);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const addToClickedCards = (id) => {
    setClickedCards([...clickedCards, currentCards[id].id]);
    shuffleCards();
  };

  const shuffleCards = () => {
    for (let i = currentCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = currentCards[i];
      currentCards[i] = currentCards[j];
      currentCards[j] = temp;
    }
    setCurrentCards(currentCards);
  };

  return (
    <div className="Game">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="cardDisplay">
        {currentCards.map((card, index) => {
          return (
            <div
              key={`unicorn-${card.id}`}
              className="card"
              onClick={() => addToClickedCards(index)}
            >
              <img src={card.name} alt={card.text}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;

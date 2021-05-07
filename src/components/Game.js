import React, { useState } from "react";
import unicorns from "../images/imageData";
import Scoreboard from "./Scoreboard";

const Game = () => {
  const [currentCards, setCurrentCards] = useState(unicorns);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClickedCards = (id) => {
    setClickedCards([...clickedCards, currentCards[id].id]);
    if (clickedCards.includes(currentCards[id].id)) {
      setBestScore(currentScore);
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      shuffleCards();
      setCurrentScore(currentScore + 1);
      setBestScore(bestScore);
    }
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
              onClick={() => handleClickedCards(index)}
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

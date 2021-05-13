import React, { useState, useEffect } from "react";
import unicorns from "../images/imageData";
import Scoreboard from "./Scoreboard";
import WinMessage from "./WinMessage";

const Game = () => {
  const [currentCards, setCurrentCards] = useState(unicorns);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState("");
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (currentScore === 20 && bestScore <= 20) {
      setWin(true);
    }
  }, [currentScore, bestScore]);

  const handleClickedCards = (id) => {
    setClickedCards([...clickedCards, currentCards[id].id]);
    if (clickedCards.includes(currentCards[id].id)) {
      setGameOver(`Game Over! You chose the ${currentCards[id].text} twice!`);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setGameOver("Keep playing to beat your best score!");
      shuffleCards();
      setCurrentScore(currentScore + 1);
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

  const resetGame = () => {
    setWin(false);
    setCurrentScore(0);
    setBestScore(0);
    setClickedCards([]);
  };

  return win === false ? (
    <div className="Game">
      <Scoreboard
        currentScore={currentScore}
        bestScore={bestScore}
        gameOver={gameOver}
      />
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
  ) : (
    <WinMessage resetGame={resetGame} />
  );
};

export default Game;

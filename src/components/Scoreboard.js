import React from "react";

const Scoreboard = (props) => {
  const currentScore = props.currentScore;
  const bestScore = props.bestScore;
  const gameOver = props.gameOver;

  return (
    <div className="Scoreboard">
      <div className="score">Current Score: {currentScore}</div>
      <div className="score">Best Score: {bestScore}</div>
      <div className="announcement">{gameOver}</div>
    </div>
  );
};

export default Scoreboard;

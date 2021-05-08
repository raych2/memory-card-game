import React from "react";

const Scoreboard = (props) => {
  const currentScore = props.currentScore;
  const bestScore = props.bestScore;
  const gameOver = props.gameOver;

  return (
    <div className="Scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
      <div>{gameOver}</div>
    </div>
  );
};

export default Scoreboard;

import React from "react";

const Scoreboard = (props) => {
  const currentScore = props.currentScore;
  const bestScore = props.bestScore;

  return (
    <div className="Scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;

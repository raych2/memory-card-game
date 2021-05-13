import React from "react";
import unicorns from "../images/imageData";

const WinMessage = (props) => {
  const resetGame = props.resetGame;

  return (
    <div className="WinMessage">
      <div className="winning-card">
        <img src={unicorns[10].name} alt={unicorns[10].text}></img>
      </div>
      <div className="win-announcement">
        Congrats! You chose all 20 unicorns!
      </div>
      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default WinMessage;

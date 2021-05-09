import React from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <h3>
        Can you choose all 20 unicorns without choosing the same unicorn twice?
      </h3>
      <Game />
      <footer>
        <div id="icon">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

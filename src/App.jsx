import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(
      (currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"),
      setGameTurn((prevTurn) => {
        let currentPlayer = "X";
        if (prevTurn.length && prevTurn[0].player === "X") {
          currentPlayer = "O";
        }
        const updatedTurn = [
          { square: { row: rowIndex, col: colIndex }, player: activePlayer },
          ...prevTurn,
        ];
        return updatedTurn;
      })
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;

import { useState } from "react";
import Board from "./components/board";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./winner";

import "./styles.scss";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXnext] = useState(false);
  const winner = calculateWinner(squares);

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return; //exit and does not proceed if condition not match
    }

    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }

        return squareValue;
      });
    });

    setIsXnext((currentIsXnext) => !currentIsXnext);
  };
  return (
    <div className="app">
      <StatusMessage isXNext={isXNext} winner={winner} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

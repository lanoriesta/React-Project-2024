import React, { useEffect, useState } from "react";
import "./tictactoe.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square-con">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  console.log(square);

  const handleOnClick = (currentSquare) => {
    let cpySquare = [...square];
    if (winnerFunction(square) || cpySquare[currentSquare]) return;
    cpySquare[currentSquare] = isXTurn ? "X" : "O";
    setIsXturn((x) => x != true);
    setSquare((s) => (s = cpySquare));
  };

  const winnerFunction = (square) => {
    const winnerPattern = [
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setIsXturn(true);
    setSquare(Array(9).fill(""));
  };

  useEffect(() => {
    if (!winnerFunction(square) && square.every((item) => item !== "")) {
      setStatus("It's a DRAW");
    } else if (winnerFunction(square)) {
      setStatus(`Winner is ${winnerFunction(square)}! Please restart game.`);
    } else setStatus(`Your turn ${isXTurn ? "X" : "O"}`);
  }, [square, isXTurn]);

  return (
    <div className="Parent h-screen text-center">
      <h1>TicTacToe</h1>
      <div className="container tictactoe-container">
        <div className="row1">
          <Square value={square[0]} onClick={() => handleOnClick(0)} />
          <Square value={square[1]} onClick={() => handleOnClick(1)} />
          <Square value={square[2]} onClick={() => handleOnClick(2)} />
        </div>
        <div className="row1">
          <Square value={square[3]} onClick={() => handleOnClick(3)} />
          <Square value={square[4]} onClick={() => handleOnClick(4)} />
          <Square value={square[5]} onClick={() => handleOnClick(5)} />
        </div>
        <div className="row1">
          <Square value={square[6]} onClick={() => handleOnClick(6)} />
          <Square value={square[7]} onClick={() => handleOnClick(7)} />
          <Square value={square[8]} onClick={() => handleOnClick(8)} />
        </div>
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;

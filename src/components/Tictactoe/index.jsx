import React, { useEffect, useState } from "react";
import "./tictactoe.css";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square-btn">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinnerFunction = (squares) => {
    const winnerPattern = [
      [0, 1, 2],
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
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setSquare(Array(9).fill(""));
    setIsXTurn(true);
  };

  const handleOnClick = (currentSquare) => {
    let cpySquare = [...square];
    if (getWinnerFunction(square) || cpySquare[currentSquare]) return;
    cpySquare[currentSquare] = `${isXTurn ? "X" : "O"}`;
    setIsXTurn((x) => x != true);
    setSquare((s) => (s = cpySquare));
    console.log(cpySquare);
  };

  useEffect(() => {
    if (!getWinnerFunction(square) && square.every((item) => item !== "")) {
      setStatus("It's a DRAW! Please restart the game");
    } else if (getWinnerFunction(square)) {
      setStatus(
        `Winner is ${getWinnerFunction(square)}. Please restart the game`
      );
    } else setStatus(`Your turn ${isXTurn ? "X" : "O"}`);
  }, [square, isXTurn]);

  return (
    <div className="Parent h-screen text-center">
      <h1>TicTacToe</h1>
      <div className="container tictactoe-con">
        <div className="row">
          <Square value={square[0]} onClick={() => handleOnClick(0)} />
          <Square value={square[1]} onClick={() => handleOnClick(1)} />
          <Square value={square[2]} onClick={() => handleOnClick(2)} />
        </div>
        <div className="row">
          <Square value={square[3]} onClick={() => handleOnClick(3)} />
          <Square value={square[4]} onClick={() => handleOnClick(4)} />
          <Square value={square[5]} onClick={() => handleOnClick(5)} />
        </div>
        <div className="row">
          <Square value={square[6]} onClick={() => handleOnClick(6)} />
          <Square value={square[7]} onClick={() => handleOnClick(7)} />
          <Square value={square[8]} onClick={() => handleOnClick(8)} />
        </div>
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;

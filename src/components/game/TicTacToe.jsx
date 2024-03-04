import React, { useState } from 'react';
import { Button } from "rsuite";
import WinnerModal from "./WinnerModal";

function Square({ value, onSquareClick }) {
  let className = 'square';

  // Conditionally update className based on the value
  if (value === 'X') {
    className += ' player-x'; // Add a class for X player
  } else if (value === 'O') {
    className += ' player-o'; // Add a class for O player
  }

  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay, restart }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `${!!squares.filter(Boolean).length ? 'Next' : 'Start'} player: ` + ( xIsNext ? 'X' : 'O' );
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      {winner && <WinnerModal winner={winner} restart={restart}/>}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [ a, b, c ] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [ history, setHistory ] = useState([ Array(9).fill(null) ]);
  const [ currentMove, setCurrentMove ] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [ ...history.slice(0, currentMove + 1), nextSquares ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game-wrapper">
      <div className="background-container"/>
      <div className="game">
        <h3 className="game-name">Tic - Tac - Toe</h3>
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} restart={() => jumpTo(0)}/>
        </div>
        <div className="game-info">
          <Button onClick={() => jumpTo(0)}>Restart</Button>
        </div>
      </div>
    </div>
  );
}


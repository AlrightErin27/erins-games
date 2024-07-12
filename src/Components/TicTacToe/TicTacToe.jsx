import "./TicTacToe.css";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import GameInfo from "./GameInfo";

export default function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [cells, setCells] = useState([]);
  const [numCellsFilled, setNumCellsFilled] = useState(0);
  const [foundWin, setFoundWin] = useState(false);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const startGame = () => {
    setFoundWin(false);
    //set cells into state using emptyCells
    const emptyCells = [
      { mark: "", local: 1 },
      { mark: "", local: 2 },
      { mark: "", local: 3 },
      { mark: "", local: 4 },
      { mark: "", local: 5 },
      { mark: "", local: 6 },
      { mark: "", local: 7 },
      { mark: "", local: 8 },
      { mark: "", local: 9 },
    ].map((cell) => ({ ...cell, id: Math.random() }));
    setCells(emptyCells);
  };

  //start game automatically
  useEffect(() => {
    startGame();
  }, []);

  const handleCellClick = (cell) => {
    const newCell = { ...cell, mark: player };
    setCells((prevCells) => {
      return prevCells.map((prevCell) => {
        if (prevCell.mark === "" && prevCell.local === cell.local) {
          return newCell;
        } else {
          return prevCell;
        }
      });
    });
    setNumCellsFilled(() => numCellsFilled + 1);
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  //if all cells are filled in state, depending on current player, check board for wins
  //changes when a cell is changed aka clicked
  useEffect(() => {
    const checkForWins = (Y) => {
      //check only for wins horizontal
      if (
        (cells[0].mark === Y && cells[1].mark === Y && cells[2].mark === Y) ||
        (cells[3].mark === Y && cells[4].mark === Y && cells[5].mark === Y) ||
        (cells[6].mark === Y && cells[7].mark === Y && cells[8].mark === Y)
      ) {
        handleWinner(Y);
      } else if (
        //check only for wins vertical
        (cells[0].mark === Y && cells[3].mark === Y && cells[6].mark === Y) ||
        (cells[1].mark === Y && cells[4].mark === Y && cells[7].mark === Y) ||
        (cells[2].mark === Y && cells[5].mark === Y && cells[8].mark === Y)
      ) {
        handleWinner(Y);
      } else if (
        //check only for wins diagonal
        (cells[0].mark === Y && cells[4].mark === Y && cells[8].mark === Y) ||
        (cells[2].mark === Y && cells[4].mark === Y && cells[6].mark === Y)
      ) {
        handleWinner(Y);
      }
    };
    //runs check for wins fx with input dependant on current player
    if (cells[8]) {
      player === "X" ? checkForWins("O") : checkForWins("X");
    }
  }, [cells, player]);

  //check input var for winning patterns in cells array
  const checkForWins = (Y) => {
    //check only for wins horizontal
    if (
      (cells[0].mark === Y && cells[1].mark === Y && cells[2].mark === Y) ||
      (cells[3].mark === Y && cells[4].mark === Y && cells[5].mark === Y) ||
      (cells[6].mark === Y && cells[7].mark === Y && cells[8].mark === Y)
    ) {
      handleWinner(Y);
    } else if (
      //check only for wins vertical
      (cells[0].mark === Y && cells[3].mark === Y && cells[6].mark === Y) ||
      (cells[1].mark === Y && cells[4].mark === Y && cells[7].mark === Y) ||
      (cells[2].mark === Y && cells[5].mark === Y && cells[8].mark === Y)
    ) {
      handleWinner(Y);
    } else if (
      //check only for wins diagonal
      (cells[0].mark === Y && cells[4].mark === Y && cells[8].mark === Y) ||
      (cells[2].mark === Y && cells[4].mark === Y && cells[6].mark === Y)
    ) {
      handleWinner(Y);
    }
  };

  //checks if there's a winner an sets the state
  const handleWinner = (Y) => {
    if (Y === "X") {
      setXWins(() => xWins + 1);
    }
    if (Y === "O") {
      setOWins(() => oWins + 1);
    }
    setFoundWin(true);
    setNumCellsFilled(0);
    setPlayer("X");
    setRoundsPlayed(() => roundsPlayed + 1);
  };

  //Cat's Game check win
  if (!foundWin && numCellsFilled === 9) {
    checkForWins("X");
    checkForWins("O");
    if (!foundWin) {
      handleWinner("Cat's Game");
    }
  }

  useEffect(() => {
    if (foundWin) {
      setTimeout(() => startGame(), 1000);
    }
  }, [foundWin]);

  return (
    <div className="tic-tac-toe">
      <div className="board-cont">
        <div className="board">
          {cells.map((cell) => (
            <Cell cell={cell} key={cell.id} handleCellClick={handleCellClick} />
          ))}
        </div>
      </div>
      <GameInfo
        player={player}
        roundsPlayed={roundsPlayed}
        xWins={xWins}
        oWins={oWins}
      />
    </div>
  );
}

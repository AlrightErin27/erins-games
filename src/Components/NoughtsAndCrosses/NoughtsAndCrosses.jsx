import "./NoughtsAndCrosses.css";
import { useState } from "react";
import Square from "./Sqaure";

export default function NoughtsAndCrosses() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const changePlayer = (currPlayer) => {
    currPlayer === "X" ? setPlayer("O") : setPlayer("X");
  };

  const chooseSquare = (square) => {
    //set the arr called board bu mapping through and looking for a match
    setBoard(
      board.map((val, idx) => {
        //looking to match clicked squares index with values stored in board arr
        let newVal;
        if (square === idx && val === "") {
          //if the idx's match and the current value is empty
          //change the empty squares val to the value of the current player (X or O)
          newVal = player;
        } else {
          //if no match and not empty keep the current value the square already has
          newVal = val;
        }

        //if there is a change from above then switch players and setBoard at index to new val
        if (newVal !== val) {
          //switching players here makes it so a double click that doesn't change the value also doesn't change the current player
          changePlayer(player);
          return newVal;
        } else {
          //else the player remains the same and the value stays the same.
          return val;
        }
      })
    );
  };

  return (
    <div className="NoughtsAndCrosses">
      {board.map((key, idx) => (
        <Square
          className="Square"
          idx={idx}
          val={board[idx]}
          chooseSquare={() => chooseSquare(idx)}
        />
      ))}
    </div>
  );
}

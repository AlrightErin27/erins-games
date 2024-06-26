import "./NoughtsAndCrosses.css";
import { useState } from "react";
import Square from "./Sqaure";

export default function NoughtsAndCrosses() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const chooseSquare = (square) => {
    // console.log("You've chosen:", square);
    setBoard(
      board.map((val, idx) => {
        if (square === idx && val === "") {
          return player;
        } else {
          return val;
        }
      })
    );

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
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

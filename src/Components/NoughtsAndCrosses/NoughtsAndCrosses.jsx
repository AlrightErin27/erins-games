import "./NoughtsAndCrosses.css";
import { useState } from "react";
import Square from "./Sqaure";

export default function NoughtsAndCrosses() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  return (
    <div className="NoughtsAndCrosses">
      {board.map((row, i) => (
        <div className="board-row">
          {row.map(
            (_, j, x) => (
              (x = sqaureVal(i, j)),
              (<Square col={j} row={i} val={x} chooseSquare={() => {}} />)
            )
          )}
        </div>
      ))}
    </div>
  );
}
const sqaureVal = (row, col) => {
  let val;
  if (row === 0) {
    if (col === 0) {
      val = 1;
    } else if (col === 1) {
      val = 2;
    } else {
      val = 3;
    }
  } else if (row === 1) {
    if (col === 0) {
      val = 4;
    } else if (col === 1) {
      val = 5;
    } else {
      val = 6;
    }
  } else if (row === 2) {
    if (col === 0) {
      val = 7;
    } else if (col === 1) {
      val = 8;
    } else {
      val = 9;
    }
  }
  console.log("MAIN PAGE", val);
  return val;
};

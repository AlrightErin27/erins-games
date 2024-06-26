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

  //function to change the value dynamically in state of each square
  const chooseSquare = (square) => {
    let result = board.map((row, i) => {
      row.map((_, j, squareId) => {
        squareId = findSquareId(i, j);

        if (square === squareId) {
          console.log("Match");
        }
      });
    });
    setBoard(result);
  };

  return (
    <div className="NoughtsAndCrosses">
      {board.map((row, i) => (
        <div className="row">
          {row.map(
            (_, j, squareId) => (
              (squareId = findSquareId(i, j)),
              (
                <Square
                  squareId={squareId}
                  val={board[i][j]}
                  chooseSquare={() => {
                    chooseSquare(squareId);
                  }}
                />
              )
            )
          )}
        </div>
      ))}
    </div>
  );
}

const findSquareId = (row, col) => {
  let val;
  if (row === 0) {
    if (col === 0) {
      val = 0;
    } else if (col === 1) {
      val = 1;
    } else {
      val = 2;
    }
  } else if (row === 1) {
    if (col === 0) {
      val = 3;
    } else if (col === 1) {
      val = 4;
    } else {
      val = 5;
    }
  } else if (row === 2) {
    if (col === 0) {
      val = 6;
    } else if (col === 1) {
      val = 7;
    } else {
      val = 8;
    }
  }

  return val;
};

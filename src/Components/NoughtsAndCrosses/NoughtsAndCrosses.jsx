import "./NoughtsAndCrosses.css";
import { useState, useEffect } from "react";
import Square from "./Square";
import { Patterns } from "./Patterns";
import { v4 as uuidv4 } from "uuid";

export default function NoughtsAndCrosses() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      console.log("WINNER:", result.winner, "GAME:", result.state);
    }
  }, [result]);

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

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      //board at index of each pattern's index 0
      //first pattern starts at index 0, so it looks at board's index 0
      //2nd pattern starts at index 3, so check board index 3
      const currPlayer = board[currPattern[0]];
      if (currPlayer === "") return;
      let foundWin = true;
      currPattern.forEach((idx) => {
        //looks through current pattern's 3 index's
        // console.log("Current Pattern's idx", idx);

        if (board[idx] !== currPlayer) {
          //if the board at the curr index doesn't equal the player at the beginning of the pattern
          // console.log("player", currPlayer, "board at index", board[idx]);
          foundWin = false;
        }
      });

      if (foundWin) {
        setResult({ winner: currPlayer, state: "over" });
      }
    });
  };

  return (
    <div className="NoughtsAndCrosses">
      {board.map((item, idx) => (
        <Square
          className="Square"
          idx={idx}
          key={idx}
          val={board[idx]}
          chooseSquare={() => chooseSquare(idx)}
        />
      ))}
    </div>
  );
}

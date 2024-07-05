import "../styles.css";
import { useState, useEffect } from "react";
import Square from "./Square";
import { Patterns } from "./Patterns";

export default function NoughtsAndCrosses() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "in-play" });
  let [scoreX, setScoreX] = useState(0);
  let [scoreO, setScoreO] = useState(0);

  useEffect(() => {
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
          setResult({ winner: currPlayer + " Won!", state: "Won" });
          currPlayer === "X"
            ? setScoreX((scoreX) => scoreX + 1)
            : setScoreO((scoreO) => scoreO + 1);
        }
      });
    };
    checkWin();
    const checkTie = () => {
      let allSquaresFilled = true;

      board.forEach((square) => {
        if (square === "") {
          allSquaresFilled = false;
        }
      });
      if (allSquaresFilled) {
        setResult({ winner: "Cat's Game", state: "Tie" });
      }
    };
    checkTie();
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      console.log("RESULT:", result.winner, "GAME:", result.state);
      restartGame();
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

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  const winImagesDisplay = () => {
    if (result.winner === "Cat's Game") {
      return <div className="cats-game-img" />;
    } else if (result.winner === "X Won!") {
      return <div className="xWin-game-img">X WINS!</div>;
    } else if (result.winner === "O Won!") {
      return <div className="oWin-game-img">O WINS!</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="NoughtsAndCrosses">
      <div className="nc-board">
        {board.map((item, idx) => (
          <Square
            className="Square"
            idx={idx}
            key={idx}
            val={board[idx]}
            state={result.state}
            chooseSquare={() => {
              chooseSquare(idx);
            }}
          />
        ))}
      </div>
      <div className="data">
        <div className="winner-game-img">{winImagesDisplay()}</div>

        <div className="data-text">
          {result.state === "in-play" ? (
            <>
              Player : {player}
              <br />
              <br />
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setResult({ winner: "none", state: "in-play" });
                }}
              >
                Restart
              </button>
              <br />
            </>
          )}
          <br />
          Score X: {scoreX}
          <br />
          Score O: {scoreO}
        </div>
      </div>
    </div>
  );
}

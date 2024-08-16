import "./IceAndFire.css";
import { useEffect, useState } from "react";
import Box from "./Box";

export default function IceAndFire() {
  const lettersArr = [
    { char: "b", word: "banana", idx: 5, vert: 5, hor: 5 },
    { char: "a", word: "banana", idx: 6, vert: false, hor: true },
    { char: "n", word: "banana", idx: 7, vert: false, hor: true },
    { char: "a", word: "banana", idx: 8, vert: false, hor: true },
    { char: "n", word: "banana", idx: 9, vert: false, hor: true },
    { char: "a", word: "banana", idx: 10, vert: true, hor: true },
    { char: "e", word: "banana", idx: 16, vert: true, hor: false },
    { char: "r", word: "banana", idx: 27, vert: true, hor: false },
    { char: "r", word: "banana", idx: 38, vert: true, hor: false },
    { char: "y", word: "banana", idx: 49, vert: true, hor: true },

    { char: "c", word: "banana", idx: 44, vert: false, hor: true },
    { char: "h", word: "banana", idx: 45, vert: false, hor: true },
    { char: "e", word: "banana", idx: 46, vert: false, hor: true },
    { char: "r", word: "banana", idx: 47, vert: false, hor: true },
    { char: "r", word: "banana", idx: 48, vert: false, hor: true },

    { char: "p", word: "banana", idx: 21, vert: true, hor: false },
    { char: "p", word: "banana", idx: 32, vert: true, hor: false },
    { char: "l", word: "banana", idx: 43, vert: true, hor: false },
    { char: "e", word: "banana", idx: 54, vert: true, hor: false },
  ];
  const [boxes, setBoxes] = useState([]);
  const setGrid = () => {
    const initArr = [];
    for (let i = 0; i < 55; i++) {
      initArr.push({
        letter: "",
        black: true,
        vert: null,
        hor: null,
        idx: i,
        id: Math.random() - 0.5,
      });
    }

    let filledArr = initArr.map((box) => {
      for (let i = 0; i < lettersArr.length; i++) {
        if (box.idx === lettersArr[i].idx) {
          return {
            ...box,
            letter: lettersArr[i].char,
            black: false,
            vert: lettersArr[i].vert,
            hor: lettersArr[i].hor,
          };
        }
      }

      return box;
    });

    setBoxes(filledArr);
  };
  //create empty grid when page1st renders
  useEffect(() => {
    setGrid();
  }, []);

  const clickBox = (box) => {
    console.log(box);
  };

  return (
    <div className="crossword-cont">
      ICE AND FIRE
      <div className="grid">
        {boxes.map((box) => (
          <Box key={box.id} box={box} clickBox={clickBox} />
        ))}
      </div>
    </div>
  );
}

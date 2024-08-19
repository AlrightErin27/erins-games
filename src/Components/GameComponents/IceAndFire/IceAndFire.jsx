import "./IceAndFire.css";
import { useEffect, useState } from "react";
import Box from "./Box";

export default function IceAndFire() {
  const lettersArr = [
    {
      char: "b",
      idx: 5,
      vert: "berry",
      hor: "banana",
      corner: 2,
    },
    {
      char: "a",
      idx: 6,
      vert: null,
      hor: "banana",
      corner: null,
    },
    {
      char: "n",
      idx: 7,
      vert: null,
      hor: "banana",
      corner: null,
    },
    {
      char: "a",
      idx: 8,
      vert: null,
      hor: "banana",
      corner: null,
    },
    {
      char: "n",
      idx: 9,
      vert: null,
      hor: "banana",
      corner: null,
    },
    {
      char: "a",
      idx: 10,
      vert: "apple",
      hor: "banana",
      corner: 3,
    },
    {
      char: "e",
      idx: 16,
      vert: "berry",
      hor: null,
      corner: null,
    },
    {
      char: "r",
      idx: 27,
      vert: "berry",
      hor: null,
      corner: null,
    },
    {
      char: "r",
      idx: 38,
      vert: "berry",
      hor: null,
      corner: null,
    },
    {
      char: "y",

      idx: 49,
      vert: "berry",
      hor: "cherry",
      corner: null,
    },
    {
      char: "c",
      idx: 44,
      vert: null,
      hor: "cherry",
      corner: 1,
    },
    {
      char: "h",
      idx: 45,
      vert: null,
      hor: "cherry",
      corner: null,
    },
    {
      char: "e",
      idx: 46,
      vert: null,
      hor: "cherry",
      corner: null,
    },
    {
      char: "r",
      idx: 47,
      vert: null,
      hor: "cherry",
      corner: null,
    },
    {
      char: "r",
      idx: 48,
      vert: null,
      hor: "cherry",
      corner: null,
    },
    {
      char: "p",
      idx: 21,
      vert: "apple",
      hor: null,
      corner: null,
    },
    {
      char: "p",
      idx: 32,
      vert: "apple",
      hor: null,
      corner: null,
    },
    {
      char: "l",
      idx: 43,
      vert: "apple",
      hor: null,
      corner: null,
    },
    {
      char: "e",
      idx: 54,
      vert: "apple",
      hor: null,
      corner: null,
    },
  ];
  const [boxes, setBoxes] = useState([]);
  const [VHL, setVHL] = useState(null);
  const [HHL, setHHL] = useState(null);

  const setGrid = () => {
    const initArr = [];
    for (let i = 0; i < 55; i++) {
      initArr.push({
        black: true,
        idx: i,
        id: Math.random() - 0.5,
      });
    }

    let filledArr = initArr.map((box) => {
      for (let i = 0; i < lettersArr.length; i++) {
        if (box.idx === lettersArr[i].idx) {
          return {
            ...box,
            char: lettersArr[i].char,
            black: false,
            highLight: false,
            vert: lettersArr[i].vert,
            hor: lettersArr[i].hor,
            corner: lettersArr[i].corner,
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

  //if highlight changes
  useEffect(() => {
    if (VHL || HHL) {
      let highLightedBoxes = boxes.map((box) => {
        if ((box.vert && box.vert === VHL) || (box.hor && box.hor === HHL)) {
          return { ...box, highLight: true };
        } else {
          return { ...box, highLight: false };
        }
      });
      // console.log(highLightedBoxes);
      setBoxes(highLightedBoxes);
    }
  }, [HHL, VHL]);

  const clickBox = (box) => {
    console.log(box);
    setVHL(box.vert);
    setHHL(box.hor);
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

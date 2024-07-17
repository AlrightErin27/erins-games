import "./Crossword.css";
import { useState, useEffect } from "react";

import Box from "./Box";

export default function CrossWord() {
  const [boxes, setBoxes] = useState([]);

  const fillPuzzle = () => {
    const emptyArr = [];
    for (let i = 0; i < 350; i++) {
      emptyArr.push({
        letter: "",
        black: true,
        idx: i,
        id: Math.random() - 0.5,
      });
    }
    let filledArr = emptyArr.map((box) => {
      if (
        box.idx === 127 ||
        box.idx === 262 ||
        box.idx === 182 ||
        box.idx === 188 ||
        box.idx === 239 ||
        box.idx === 230 ||
        box.idx === 168 ||
        box.idx === 40 ||
        box.idx === 106 ||
        box.idx === 227
      ) {
        return { ...box, letter: "a", black: false };
      } else if (
        box.idx === 125 ||
        box.idx === 77 ||
        box.idx === 235 ||
        box.idx === 118 ||
        box.idx === 70
      ) {
        return { ...box, letter: "b", black: false };
      } else if (
        box.idx === 128 ||
        box.idx === 214 ||
        box.idx === 113 ||
        box.idx === 317
      ) {
        return { ...box, letter: "c", black: false };
      } else if (
        box.idx === 233 ||
        box.idx === 312 ||
        box.idx === 180 ||
        box.idx === 222 ||
        box.idx === 268 ||
        box.idx === 19 ||
        box.idx === 42 ||
        box.idx === 252
      ) {
        return { ...box, letter: "d", black: false };
      } else if (
        box.idx === 102 ||
        box.idx === 35 ||
        box.idx === 234 ||
        box.idx === 289 ||
        box.idx === 139 ||
        box.idx === 145 ||
        box.idx === 220 ||
        box.idx === 221 ||
        box.idx === 224 ||
        box.idx === 318 ||
        box.idx === 43 ||
        box.idx === 71
      ) {
        return { ...box, letter: "e", black: false };
      } else if (box.idx === 32) {
        return { ...box, letter: "f", black: false };
      } else if (
        box.idx === 183 ||
        box.idx === 186 ||
        box.idx === 89 ||
        box.idx === 255 ||
        box.idx === 307 ||
        box.idx === 94
      ) {
        return { ...box, letter: "g", black: false };
      } else if (box.idx === 134 || box.idx === 308) {
        return { ...box, letter: "h", black: false };
      } else if (
        box.idx === 9 ||
        box.idx === 132 ||
        box.idx === 33 ||
        box.idx === 293 ||
        box.idx === 306 ||
        box.idx === 316 ||
        box.idx === 123
      ) {
        return { ...box, letter: "i", black: false }; //skip j
      } else if (box.idx === 129) {
        return { ...box, letter: "k", black: false };
      } else if (
        box.idx === 126 ||
        box.idx === 187 ||
        box.idx === 264 ||
        box.idx === 223 ||
        box.idx === 41 ||
        box.idx === 202
      ) {
        return { ...box, letter: "l", black: false };
      } else if (box.idx === 131) {
        return { ...box, letter: "m", black: false };
      } else if (
        box.idx === 84 ||
        box.idx === 209 ||
        box.idx === 287 ||
        box.idx === 185 ||
        box.idx === 305 ||
        box.idx === 219 ||
        box.idx === 74 ||
        box.idx === 200 ||
        box.idx === 225 ||
        box.idx === 148
      ) {
        return { ...box, letter: "n", black: false };
      } else if (
        box.idx === 59 ||
        box.idx === 184 ||
        box.idx === 115 ||
        box.idx === 119 ||
        box.idx === 280 ||
        box.idx === 270 ||
        box.idx === 269 ||
        box.idx === 143 ||
        box.idx === 69 ||
        box.idx === 175
      ) {
        return { ...box, letter: "o", black: false };
      } else if (box.idx === 249) {
        return { ...box, letter: "p", black: false }; //skip q
      } else if (
        box.idx === 152 ||
        box.idx === 34 ||
        box.idx === 159 ||
        box.idx === 181 ||
        box.idx === 114 ||
        box.idx === 205 ||
        box.idx === 245 ||
        box.idx === 271 ||
        box.idx === 193 ||
        box.idx === 44 ||
        box.idx === 72 ||
        box.idx === 228 ||
        box.idx === 150
      ) {
        return { ...box, letter: "r", black: false };
      } else if (
        box.idx === 130 ||
        box.idx === 237 ||
        box.idx === 189 ||
        box.idx === 190 ||
        box.idx === 116 ||
        box.idx === 117 ||
        box.idx === 330 ||
        box.idx === 170 ||
        box.idx === 295 ||
        box.idx === 199 ||
        box.idx === 81
      ) {
        return { ...box, letter: "s", black: false };
      } else if (
        box.idx === 133 ||
        box.idx === 109 ||
        box.idx === 236 ||
        box.idx === 195 ||
        box.idx === 274 ||
        box.idx === 309 ||
        box.idx === 48
      ) {
        return { ...box, letter: "t", black: false }; //skip u, v
      } else if (box.idx === 120 || box.idx === 39 || box.idx === 98) {
        return { ...box, letter: "w", black: false }; //skip x
      } else if (
        box.idx === 164 ||
        box.idx === 73 ||
        box.idx === 229 ||
        box.idx === 277
      ) {
        return { ...box, letter: "y", black: false }; //skip z
      } else {
        return box;
      }
    });
    setBoxes(filledArr);
  };

  useEffect(() => {
    fillPuzzle();
  }, []);
  return (
    <div className="crossword">
      <div className="puzzle-grid">
        {boxes.map((box) => (
          <Box key={box.id} box={box} />
        ))}
      </div>
    </div>
  );
}

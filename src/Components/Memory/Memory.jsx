import "./Memory.css";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { GameInfo } from "./GameInfo";

export default function Memory() {
  // STATE
  const [cards, setCards] = useState([""]);
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);
  const [disableSelection, setDisableSelection] = useState(false);
  const [score, setScore] = useState(0);

  const items = [
    { emoji: "🗝", id: 1, matched: false, faceUp: false },
    { emoji: "🔔", id: 2, matched: false, faceUp: false },
    { emoji: "🎱", id: 3, matched: false, faceUp: false },
    { emoji: "🍁", id: 4, matched: false, faceUp: false },
    { emoji: "🐚", id: 5, matched: false, faceUp: false },
    { emoji: "🎩", id: 6, matched: false, faceUp: false },
    { emoji: "🧦", id: 7, matched: false, faceUp: false },
    { emoji: "🪶", id: 8, matched: false, faceUp: false },
    { emoji: "🐌", id: 9, matched: false, faceUp: false },
    { emoji: "🦢", id: 10, matched: false, faceUp: false },
  ];

  //shuffles cards by doubling items arr of objects randomly
  //then sets into state
  const shuffleCards = () => {
    const shuffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card }));
    setCards(shuffled);
    // console.log("shuffled the cards!");
  };
  //useEffect shuffles cards on page's 1st rendering
  useEffect(() => {
    if (cards[0] === "") {
      shuffleCards();
    } else {
      console.log("Cards already shuffled!");
    }
  }, []);

  //once a card is clicked, depending if 1st or 2nd selection
  //set chosen 2 cards into select states
  const handleCardClick = (emoji, faceUp) => {
    if (faceUp === "false") {
      faceUp = true;
    } else {
      faceUp = false;
    }
    console.log("clicked:", emoji, "Face Up ?", faceUp);
    if (!firstSelect) {
      setFirstSelect(emoji);
    } else if (firstSelect && !secondSelect) {
      setSecondSelect(emoji);
    }
  };
  //useEffect runs when card select in state have changed
  useEffect(() => {
    //if 2 selects are full...
    if (firstSelect && secondSelect) {
      console.log("1st select:", firstSelect);
      console.log("2nd select:", secondSelect);

      //makes cards no longer clickable
      setDisableSelection(true);
    }
    if (firstSelect && secondSelect) {
      checkMatched();
    }
  }, [firstSelect, secondSelect]);

  function checkMatched() {
    if (firstSelect === secondSelect) {
      console.log("Found Match", firstSelect, secondSelect);
    } else {
      console.log("Cards don't match!", firstSelect, secondSelect);
    }
    //after checking if cards match you have to manually click them to flop them back to face down
    //then enable card select again
  }

  return (
    <div className="Memory">
      <div
        className="cards-cont"
        style={{ pointerEvents: disableSelection ? "none" : null }}
      >
        {cards.map(({ emoji, id, matched, faceUp }) => (
          <Card
            emoji={emoji}
            key={id * Math.random()}
            handleCardClick={() => handleCardClick(emoji, faceUp)}
          />
        ))}
      </div>
      <GameInfo />
    </div>
  );
}

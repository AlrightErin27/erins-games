import "./MatchMe.css";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export default function MatchMe() {
  const [cards, setCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);
  const [score, setScore] = useState(0);

  const items = [
    { emoji: "🗝", id: 1, matched: false },
    { emoji: "🔔", id: 2, matched: false },
    { emoji: "🎱", id: 3, matched: false },
    { emoji: "🍁", id: 4, matched: false },
    { emoji: "🐚", id: 5, matched: false },
    { emoji: "🎩", id: 6, matched: false },
    { emoji: "🧦", id: 7, matched: false },
    { emoji: "🪶", id: 8, matched: false },
  ];

  const resetCards = () => {
    const shuffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    setCards(shuffled);
    // console.log(cards);
    // console.log(Object.entries(cards), "HEREs");
  };

  useEffect(() => {
    resetCards();
  }, []);

  function resetSelects() {
    setFirstSelect(null);
    setSecondSelect(null);
  }

  useEffect(() => {
    if (!secondSelect) return;

    //if both selects are full
    //then disable all card clicks, check if same id, handle if same or !same
    setDisabled(true);
    //then clear selects
    if (firstSelect === secondSelect) {
      setCards((prev) => {
        return prev.map((card) => {
          if (card.id === firstSelect) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      setScore((prev) => prev + 1);
      //reset game
    } else {
    }
    resetSelects();
    setDisabled(false);
  }, [firstSelect, secondSelect]);

  // function evalSelect() {
  //   console.log("1st Select:", firstSelect);
  //   console.log("2nd Select:", secondSelect);
  // }

  //handle click on button card
  function handleCardClick(e) {
    firstSelect
      ? setSecondSelect(e.target.dataset.id)
      : setFirstSelect(e.target.dataset.id);
  }

  return (
    <div className="MatchMe">
      <div className="game-board">
        {cards.map(({ emoji, key, id }) => (
          <Card
            emoji={emoji}
            key={key}
            id={id}
            handleCardClick={handleCardClick}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

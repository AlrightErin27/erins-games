import "./Concentration.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import GameData from "./GameData";

const cardEmojis = [
  { emoji: "🦢", matched: false, color: "rgb(141, 16, 16)" },
  { emoji: "🎱", matched: false, color: "rgb(183, 135, 135)" },
  { emoji: "🔔", matched: false, color: "rgb(221, 214, 214)" },
  { emoji: "🗝", matched: false, color: "rgb(185, 163, 91)" },
  { emoji: "🧦", matched: false, color: "rgb(177, 127, 52)" },
  { emoji: "🍁", matched: false, color: "rgb(86, 14, 14)" },
  { emoji: "🪐", matched: false, color: "rgb(11, 71, 81)" },
  { emoji: "🐌", matched: false, color: "rgb(136, 169, 136)" },
  { emoji: "🍄‍🟫", matched: false, color: "rgb(168, 48, 48)" },
  { emoji: "🎻", matched: false, color: "rgb(101, 82, 89)" },
  { emoji: "🕯", matched: false, color: "rgb(132, 89, 60)" },
  { emoji: "🎠", matched: false, color: "rgb(129, 44, 44)" },
];

export default function Concentration() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(null);
  const [selectOne, setSelectOne] = useState(null);
  const [selectTwo, setSelectTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffle = () => {
    const shuffledCards = [...cardEmojis, ...cardEmojis]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setSelectOne(null);
    setSelectTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleSelect = (card) => {
    // console.log("clicked", card.emoji);
    selectOne ? setSelectTwo(card) : setSelectOne(card);
  };

  useEffect(() => {
    //if both selects are full
    if (selectOne && selectTwo && selectOne.emoji === selectTwo.emoji) {
      //set cards arr again, searching for cards that match the select's emoji
      setCards((prevCards) => {
        return prevCards.map((card) => {
          //selects emoji and the cards emoji match
          //the card's matched prop gets turned true
          if (card.emoji === selectOne.emoji) {
            //changes 2 cards with the matched emoji
            return { ...card, matched: true };
          } else {
            //all other cards remain the same as before, no match
            return card;
          }
        });
      });
      setDisabled(true);
      resetSelectsAndUpdateTurn();
    } else if (selectOne && selectTwo) {
      setDisabled(true);
      //if no match found, pause a second before resetting selects and +1 to turn
      setTimeout(() => resetSelectsAndUpdateTurn(), 1900);
    }
  }, [selectOne, selectTwo]);

  const resetSelectsAndUpdateTurn = () => {
    setSelectOne(null);
    setSelectTwo(null);
    setTurns((turns) => turns + 1);
    setDisabled(false);
  };

  //start game automatically
  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div className="Concentration">
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleSelect={handleSelect}
            faceUp={card === selectOne || card === selectTwo || card.matched}
            disabled={disabled}
            matched={card.matched}
          />
        ))}
      </div>
      <br />
      <GameData turns={turns} handleRestart={shuffle} />
    </div>
  );
}

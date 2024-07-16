import "./MagicMatch.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import GameData from "./GameData";

const cardEmojis = [
  { emoji: "🦢", matched: false },
  { emoji: "🎱", matched: false },
  { emoji: "🔔", matched: false },
  { emoji: "🗝", matched: false },
  { emoji: "🧦", matched: false },
  { emoji: "🍁", matched: false },
  { emoji: "🪐", matched: false },
  { emoji: "🐌", matched: false },
  { emoji: "🍄‍🟫", matched: false },
];

export default function MagicMatch() {
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
    <div className="MagicMatch">
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

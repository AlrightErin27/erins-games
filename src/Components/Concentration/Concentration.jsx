import "./Concentration.css";
import PlayerInfo from "./PlayerInfo";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Concentration() {
  const emojis = ["🗝", "🔔", "🎱", "🍁", "🐚", "🎩", "🧦", "🐌", "🪶"];
  const [inPlay, setInPlay] = useState(false);
  const [cards, setCards] = useState([]);

  //refresh when change inPlay
  useEffect(() => {
    const shuffleCards = () => {
      let doubleEmojis = [],
        shuffled = [];
      for (let i = 0; i < emojis.length * 2; i++) {
        i < emojis.length
          ? doubleEmojis.push(emojis[i])
          : doubleEmojis.push(emojis[i - emojis.length]);
      }
      shuffled = doubleEmojis.sort((a, b) => 0.5 - Math.random());
      setCards([...shuffled]);
    };
    shuffleCards();
    console.log([...cards]);
  }, [inPlay]);

  return (
    <div className="Concentration">
      {inPlay === true ? (
        <>
          <PlayerInfo />
          <div className="board">
            {cards.map((card, idx) => (
              <Card card={card} idx={idx} key={idx} />
            ))}
          </div>
        </>
      ) : (
        <button className="shuffle-btn" onClick={() => setInPlay(true)}>
          Shuffle Deck
        </button>
      )}
    </div>
  );
}

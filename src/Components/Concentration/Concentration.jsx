import "../styles.css";
import PlayerInfo from "./PlayerInfo";
import Card from "./Card";
import StartModal from "./StartModal";
import { useState, useEffect } from "react";

export default function Concentration() {
  const emojis = [
    "🗝",
    "🔔",
    "🎱",
    "🍁",
    "🐚",
    "🎩",
    "🧦",
    "🐌",
    "🪶",
    "☕️",
    "🍐",
    "🐈‍⬛",
  ];
  //isMounted is placed into useEffect as ternary to stop code execution on first render
  const [isMounted, setIsMounted] = useState(false);
  const [inPlay, setInPlay] = useState(false);
  const [cards, setCards] = useState([]);
  const [playersName, setPlayersName] = useState("");
  const [em1, setEm1] = useState("");
  const [em2, setEm2] = useState("");
  const [twoCardsUp, setTwoCardsUp] = useState(false);

  //refresh when change inPlay
  useEffect(() => {
    if (isMounted === false) {
      setIsMounted(true);
    } else {
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
      // console.log(playersName, "IS PLAYING");
      // console.log([...cards]);
    }
  }, [inPlay]);

  if (twoCardsUp === true) {
    console.log("Look for match");
    if (em1 === em2) {
      console.log("FOUND MATCH");
    }
  }

  return (
    <div className="Concentration">
      {inPlay === true ? (
        <>
          <PlayerInfo playersName={playersName} />
          <div className="board">
            {cards.map((card, idx) => (
              <Card
                card={card}
                idx={idx}
                key={idx}
                em1={em1}
                em2={em2}
                setEm1={setEm1}
                setEm2={setEm2}
                setTwoCardsUp={setTwoCardsUp}
              />
            ))}
          </div>
        </>
      ) : (
        <StartModal setPlayersName={setPlayersName} setInPlay={setInPlay} />
      )}
    </div>
  );
}

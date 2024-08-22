import React, { useState, useEffect } from "react";
import "./Concentration.css";
import Card from "./ConCard";
import img1 from "../../images/concentration/abcs.jpg";
import img2 from "../../images/concentration/dreams.jpg";
import img3 from "../../images/concentration/familyphoto.jpg";
import img4 from "../../images/concentration/girlmoon.jpg";
import img5 from "../../images/concentration/ladiesmars.jpg";
import img6 from "../../images/concentration/newnationalpark.jpg";
import img7 from "../../images/concentration/pillowtalk.jpg";
import img8 from "../../images/concentration/purpletan.jpg";
import img9 from "../../images/concentration/redondo.jpg";

const initialCards = [
  { id: 1, content: img1, isFlipped: false, isMatched: false },
  { id: 2, content: img1, isFlipped: false, isMatched: false },
  { id: 3, content: img2, isFlipped: false, isMatched: false },
  { id: 4, content: img2, isFlipped: false, isMatched: false },
  { id: 5, content: img3, isFlipped: false, isMatched: false },
  { id: 6, content: img3, isFlipped: false, isMatched: false },
  { id: 7, content: img4, isFlipped: false, isMatched: false },
  { id: 8, content: img4, isFlipped: false, isMatched: false },
  { id: 9, content: img5, isFlipped: false, isMatched: false },
  { id: 10, content: img5, isFlipped: false, isMatched: false },
  { id: 11, content: img6, isFlipped: false, isMatched: false },
  { id: 12, content: img6, isFlipped: false, isMatched: false },
  { id: 13, content: img7, isFlipped: false, isMatched: false },
  { id: 14, content: img7, isFlipped: false, isMatched: false },
  { id: 15, content: img8, isFlipped: false, isMatched: false },
  { id: 16, content: img8, isFlipped: false, isMatched: false },
  { id: 17, content: img9, isFlipped: false, isMatched: false },
  { id: 18, content: img9, isFlipped: false, isMatched: false },
];

export default function Concentration1() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Shuffle cards at the start
    resetGame();
  }, []);

  const shuffleCards = (cardsArray) => {
    return cardsArray
      .map((card) => ({ ...card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((card) => ({ ...card, sort: undefined, idxKey: Math.random() }));
  };

  const resetGame = () => {
    setCards(shuffleCards([...initialCards]));
    setFlippedCards([]);
    setMatches(0);
    setIsChecking(false);
  };

  const handleCardClick = (index) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];

    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      setTimeout(() => checkForMatch(newFlippedCards), 2500);
    } else {
      setFlippedCards(newFlippedCards);
    }
  };

  const checkForMatch = (flippedIndexes) => {
    const [firstIndex, secondIndex] = flippedIndexes;
    const newCards = [...cards];

    if (newCards[firstIndex].content === newCards[secondIndex].content) {
      newCards[firstIndex].isMatched = true;
      newCards[secondIndex].isMatched = true;
      setMatches((prevMatches) => prevMatches + 1);
    } else {
      newCards[firstIndex].isFlipped = false;
      newCards[secondIndex].isFlipped = false;
    }

    setCards(newCards);
    setFlippedCards([]);
    setIsChecking(false);
  };

  if (matches === cards.length / 2) {
    resetGame();
  }

  return (
    <div className="concentration-game">
      <div className="game-board">
        {cards.map((card, idx) => (
          <Card
            card={card}
            key={idx}
            idx={idx}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="game-controls">
        <div></div>
        <button onClick={resetGame} class="slide-underline-button">
          Restart
        </button>
      </div>
    </div>
  );
}

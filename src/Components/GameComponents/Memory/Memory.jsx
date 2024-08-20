import { useEffect, useState } from "react";

import "./Memory.css";
import MemoryCard from "./MemoryCard";
import img1 from "../../../images/concentration/abcs.jpg";
// import img2 from "../../../images/concentration/dreaming.jpg";
import img3 from "../../../images/concentration/dreams.jpg";
import img4 from "../../../images/concentration/familyphoto.jpg";
import img5 from "../../../images/concentration/girlmoon.jpg";
import img6 from "../../../images/concentration/ladiesmars.jpg";
import img7 from "../../../images/concentration/newnationalpark.jpg";
import img8 from "../../../images/concentration/pillowtalk.jpg";
// import img9 from "../../../images/concentration/playtime.jpg";
import img10 from "../../../images/concentration/purpletan.jpg";
import img11 from "../../../images/concentration/redondo.jpg";

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [selectOne, setSelectOne] = useState(null);
  const [selectTwo, setSelectTwo] = useState(null);
  const [numMatch, setNumMatch] = useState(0);

  const imgArr = [
    { img: img1, idx: 1 },
    // { img: img2, idx: 2 },
    { img: img3, idx: 3 },
    { img: img4, idx: 4 },
    { img: img5, idx: 5 },
    { img: img6, idx: 6 },
    { img: img7, idx: 7 },
    { img: img8, idx: 8 },
    // { img: img9, idx: 9 },
    { img: img10, idx: 10 },
    { img: img11, idx: 11 },
  ];

  //shuffle deck
  const shuffle = () => {
    const arr = [...imgArr, ...imgArr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        faceDown: true,
        matched: false,
      }));

    setCards(arr);
  };
  //shuffle deck on first render
  //set play true
  useEffect(() => {
    shuffle();
  }, []);

  function clickCard(currCard) {
    //change selected card to flipped
    const arr = cards.map((card) => {
      if (currCard === card) {
        return { ...card, faceDown: false };
      } else {
        return card;
      }
    });
    setCards(arr);

    //set selected cards
    if (selectOne) {
      setSelectTwo(currCard);
    } else {
      setSelectOne(currCard);
    }
  }

  //reset selects
  function resetSelectsAndFlip() {
    // flip all but matched cards back over
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (!card.matched) {
          return { ...card, faceDown: true };
        } else {
          return card;
        }
      });
    });
    setSelectOne(null);
    setSelectTwo(null);
  }

  useEffect(() => {
    //if both selects are full check for match then set the cards in state as matched
    if (selectOne && selectTwo && selectOne.img === selectTwo.img) {
      const arr = cards.map((card) => {
        if (card.img === selectOne.img) {
          return { ...card, matched: true };
        } else {
          return card;
        }
      });
      // console.log("MATCH");
      setNumMatch((x) => x + 1);
      setCards(arr);
      setSelectOne(null);
      setSelectTwo(null);
    } else if (selectOne && selectTwo) {
      setTimeout(() => resetSelectsAndFlip(), 1900);

      // console.log("NO MATCH");
    }
  }, [selectOne, selectTwo]);

  //game is over
  if (numMatch === imgArr.length) {
    setNumMatch(0);
    // alert("GAME WON");
    setTimeout(() => {
      setSelectOne(null);
      setSelectTwo(null);
      shuffle();
    }, 1900);
  }

  return (
    <div className="memory-game">
      Memory
      <div className="card-cont">
        {cards.map((card) => (
          <MemoryCard card={card} key={card.id} clickCard={clickCard} />
        ))}
      </div>
    </div>
  );
}

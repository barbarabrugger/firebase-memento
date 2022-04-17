import React, { useState, useEffect } from 'react';
import './App.css';
import shuffle from "./utilities/shuffle";
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);
  const [setBadge, clearBadge] = useState();

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  }

  const handleNewGame = () => {
    clearBadge();
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  useEffect(() => {
    let pickTimer;

    if (pickOne && pickTwo) {
      if(pickOne.icon === pickTwo.icon) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.icon === pickOne.icon) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    }

  }, [cards, pickOne, pickTwo, wins]);

  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched);

    if(cards.length && checkWin.length < 1){
      console.log('You win!');
      setWins(wins + 1);
      handleTurn();
      setBadge();
      setCards(shuffle);
    }

  }, [cards, setBadge, wins]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />

      <div className="grid">
        {cards.map((card) => {
          const { icon, id, matched } = card;

          return (
            <Card key={id} icon={icon} selected={card === pickOne || card === pickTwo || matched} onClick={() => handleClick(card)} />
          );
        })}
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import './App.css';
import shuffle from "./utilities/shuffle";

function App() {
  const [cards, setCards] = useState(shuffle);
  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { icon, id, matched } = card;

          return (
            <Card key={id} icon={icon} selected={false} onClick={() => {}} />
          )
        })}
      </div>
    </>
  );
}

export default App;

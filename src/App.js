import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/cardContainer';
import { Deck } from './components/deck';
import { tarotList } from './resources/tarotList';
import { draw5Tarots } from './components/helpers/drawCards';
import { DescriptionsContainer } from './components/descriptionContainer';

function App() {
  const [tarots, setTarots] = useState([]);

  const areTarotsDrawn = tarots.length === 5;

  const tellFortune = () => {
    const drawRandomTarots = draw5Tarots(tarotList);
    setTarots(drawRandomTarots);
  };

  return (
    <div className="App">
      <Deck tellFortune={tellFortune} />
      <div className="CenterArea">
        {areTarotsDrawn ? <CardContainer tarots={tarots} /> : null}
        {areTarotsDrawn ? <DescriptionsContainer tarots={tarots} /> : null}
      </div>
    </div>
  );
}

export default App;

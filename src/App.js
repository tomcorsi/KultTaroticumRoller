import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/cardContainer';
import { Deck } from './components/deck';
import { tarotList } from './resources/tarotList';

function App() {

  const [tarots, setTarots] = useState([])

  const drawTarots = () => {
    
    setTarots(tarots)
  }


  return (
    <div className="App">
        <Deck drawTarot={drawTarots}/>
        {/* modify line below to tarots={tarots} */}
        <CardContainer tarots={tarotList}/>
    </div>
  );
}

export default App;

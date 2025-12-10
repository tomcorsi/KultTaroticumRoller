import { useState } from "react";
import "./App.css";
import { CardContainer } from "./components/cardContainer";
import { Deck } from "./components/deck";
import { tarotList } from "./resources/tarotList";
import { draw5Tarots } from "./components/helpers/drawCards";

function App() {
  const [tarots, setTarots] = useState([]);

  const tellFortune = () => {
    const drawRandomTarots = draw5Tarots(tarotList);
    setTarots(drawRandomTarots);
  };

  return (
    <div className="App">
      <Deck tellFortune={tellFortune} />
      <CardContainer tarots={tarots} />
    </div>
  );
}

export default App;

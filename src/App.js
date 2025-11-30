import './App.css';
import { CardContainer } from './components/cardContainer';
import { Deck } from './components/deck';

function App() {
  return (
    <div className="App">
        <Deck />
        <CardContainer />
    </div>
  );
}

export default App;

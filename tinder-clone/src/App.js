import './App.css';
import Header from './pages/Header';
import SwipeButtons from './pages/SwipeButtons';
import TinderCards from './pages/TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
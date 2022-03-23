import logo from './logo.svg';
import './App.css';
import Shoes from './components/shoe/Shoes';
import Cars from './components/cars/Cars';
import Cosmetics from './components/cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
      <Shoes></Shoes>
      <Cars></Cars>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;

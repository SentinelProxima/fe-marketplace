import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Items from './components/Items';
import Basket from './components/Basket';

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Proxima's Market</h1>
        <nav>
          <Link class="link" to="/items">Home</Link>
          <Link class="link" to="/basket">Basket</Link>
        </nav>
        <Routes>
          <Route path="/items" element={<Items basket={basket} setBasket={setBasket} />} />
          <Route path="/basket" element={<Basket basket={basket} />} />
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

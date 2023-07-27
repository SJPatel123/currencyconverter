import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import Navbar from './components/Navbar'
import currency_exchange from './assets/currency_exchange.jpg'

function App() {
  const [mode, setMode] = useState<string|undefined>('');
  const callback = (mode) => {
    setMode(mode);
  }

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="currency-details-main">
        <div className="navbar-main">
          <Navbar />
        </div>
        <div className="currency-details-box mt-4 flex justify-start ml-32">
          <Details onClick={callback}/>
          <div className="curr-exch-svg flex items-center">
            <img className="w-3/5 h-full ml-28" src={currency_exchange} onContextMenu={handleContextMenu} draggable={false} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

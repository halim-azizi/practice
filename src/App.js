import './App.css';
import axios from 'axios';
import React, { useEffect, useState} from "react";
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
      filteredCoins();
      console.log(res.data)
    }).catch(error => console.log(error))
  },[])
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
      <div className="coin-app">
        <div className="coin-search">
          <form action="">
            <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>
          </form>
        </div>
        {filteredCoins.map(coin=> {
          console.log("f",filteredCoins)
          return(
              <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  pricechange={coin.price_change_percentage_24h}
              />
          )
        })}
      </div>
  )
}

export default App;

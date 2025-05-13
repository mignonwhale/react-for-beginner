import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const onChange = (event) => setAmount(event.target.value * 100000000);

  useEffect(() => {
    // fetch("http://api.coinpaprika.com/v1/tickers")
    //   .then((response) => response.json())
    //   .then((json) => setCoins(json));
    setCoins([
      { id: "1", name: "비트코인", quote: "USD", price: 100000000 },
      { id: "2", name: "이더리움", quote: "USD", price: 510000 },
      { id: "3", name: "알코인", quote: "USD", price: 10000 },
    ]);
    setLoading(false);
  }, []);
  console.log(coins);
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} $({coin.price})
            </li>
          ))}
        </ul>
      )}
      <hr />
      <label htmlFor="dollar">dollar</label>
      <input id="dollar" type="text" placeholder="dollar" value={amount} onChange={onChange} />
      <label htmlFor="coin">coin</label>
      <input id="coin" type="text" placeholder="coin" value={amount * 100000000} onChange={onChange} disabled={true} />
    </div>
  );
}

export default App;

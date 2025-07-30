import React, { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  // Handler functions
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="container">
      <h1>Simple Counter App</h1>
      <p className="count">Count: {count}</p>

      <div className="buttons">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement}>➖ Decrement</button>
        <button onClick={handleReset}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default App;

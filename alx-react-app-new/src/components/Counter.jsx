import { useState } from 'react';

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '5px' }}>
        Decrement
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
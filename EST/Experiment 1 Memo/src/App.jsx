import React, { useState } from "react";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);

  // create 1000 items ONCE
  const [items] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)
  );

  console.log("App rendered");

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <List items={items} />
    </div>
  );
}

export default App;
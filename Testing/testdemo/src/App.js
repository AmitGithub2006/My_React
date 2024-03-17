import { Counter } from './components/counter/Counter';
import { Counter2 } from './components/counter2/Counter2';
import { Counter3 } from './components/counter3/Counter3';
import { Greet } from './components/greet/Greet';
import { Skills } from './components/skills/Skills';

import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev+1)
  }
  const handleDecrement = () => {
    setCount((prev) => prev-1)
  }

  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Counter /> */}
      {/* <Skills skills={"skills"}/> */}
      {/* <Counter2 /> */}
      <Counter3 count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
      {/* <button onClick={handleIncrement}>increment parent</button>
      <button onClick={handleDecrement}>decrement parent</button> */}
    </div>
  );
}

export default App;

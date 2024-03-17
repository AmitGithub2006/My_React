import React, {useState} from 'react'

export function Counter2() {
    const [count, setCount] = useState(0)
    const [inputVal, setInputVal] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev+1)}>click</button>
        <input type="number" name='inputVal' value={inputVal} onChange={(e) => setInputVal(parseInt(e.target.value))} />
        <button onClick={() => inputVal}>setCount</button>
    </div>
  )
}
import React,{useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDec = () => {
        setCount(count - 1);
    }

    const handleInc = () => {
      setCount(count + 1);
    };

    return (
      <>
        <button onClick={handleDec}> - </button>
        <span>{count}</span>
        <button onClick={handleInc}> + </button>
      </>
    );
}

export default Counter;
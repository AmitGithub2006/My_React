import React from 'react'

export function Counter3(props) {
    const handleIncrement = () => {
        props.count += 1;
    }
  return (
    <div>
      <h1>counter - 3</h1>
      <h2>{props.count}</h2>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>decrement</button>
      )}
    </div>
  );
}
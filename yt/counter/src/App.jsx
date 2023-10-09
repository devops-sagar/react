import React, { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const deleteValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Sagar Pathak {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value +</button>{" "}
      <button onClick={deleteValue}>Delete Value -</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

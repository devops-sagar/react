import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 15
  let [counter, setCounter] = useState(15) //counter is a variable wheares setCounter is a function

  const addValue = () => {
    setCounter(counter+=1)
    setCounter(counter+=1)
    setCounter(counter+=1)
    setCounter(counter+=1)
  }

  const deleteValue = () => {
    setCounter(counter-=1)
    setCounter(counter-=1)
    setCounter(counter-=1)
    setCounter(counter-=1)
    setCounter(counter-=1)
  }

  return (
    <>
      <h1>Sagar Pathak {counter}</h1>     {/*Now we are passing counter variable as Props from this point to the end of the code*/}
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>
        Add Value +
      </button>
      {" "}
      <button
      onClick={deleteValue}>
        Delete Value -
      </button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

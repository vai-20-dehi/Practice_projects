import { useState} from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button>
      <br />
      <button
      onClick={removeValue}
      >Remove value </button>
    </>
  )
}

export default App

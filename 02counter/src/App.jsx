import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    if (counter <20) {
      
      setCounter(counter+1 )
    }
    
  }

  const removeValue = () => {
    if (counter>0) {
      
      setCounter(counter - 1)
    }
  }
    
  return (
    <>
      <h1>React JS basics</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />

      <button 
      onClick={removeValue}
      >Remove value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}


export default App

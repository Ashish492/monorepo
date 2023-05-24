import { useState } from 'react'
import './App.css'
import { CounterButton } from 'ui'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <button type="button" onClick={() => setCounter(1)}>
        {counter}
      </button>
      <CounterButton />
    </>
  )
}
export default App

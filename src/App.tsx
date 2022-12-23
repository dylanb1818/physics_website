import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
  
      </div>
      <h1>Vite + React + penis</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Make AP Physics Your Bitch!
      </p>

      <Button variant='light'>
      I don't agree to sell my privacy
      </Button>
    </div>
  )
}

export default App

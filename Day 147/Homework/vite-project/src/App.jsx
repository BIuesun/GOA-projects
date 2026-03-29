import { useState } from 'react'
import './App.css'
import Show from './Show'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Show />
    </>
  )
}

export default App
